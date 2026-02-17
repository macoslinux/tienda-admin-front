"use client";

import { useEffect, useMemo, useState } from "react";
import { normalizeStr } from "@/utils/helper";

export type SortKey = "name" | "category" | "brand" | "price";

export type ProductRow = {
  stock: number;
  sku: string;
  name: string;
  variants: string;
  brand: string;
  category: string;
  price: number; // ej: "$2,199.00"
  status: string;
  image: string;
};

function parsePrice(str: string): number {
  const cleaned = str.replace(/[^0-9.,-]/g, "").replace(/,/g, "");
  const num = Number.parseFloat(cleaned);
  return Number.isNaN(num) ? 0 : num;
}

export function useProductTableLogic(products: ProductRow[], pageSize = 7) {
  // ---- Search ----
  const [query, setQuery] = useState("");

  // Al escribir, volvemos a la página 1
  useEffect(() => {
    if (!query) return;
    setPage(1);
  }, [query]);

  const filtered = useMemo(() => {
    const q = normalizeStr(query);
    if (!q) return products;

    return products.filter((p) => {
      const fields = [
        p.sku,
        p.name,
        p.brand,
        p.category,
        p.variants,
        p.status,
        // también precio como texto sin símbolos para que "2199" haga match
        p.price
          .replace(/[^0-9.,-]/g, "")
          .replace(/,/g, ""),
        p.price, // por si escriben con $
      ];
      return fields.some((f) => normalizeStr(f).includes(q));
    });
  }, [products, query]);

  // ---- Ordenamiento ----
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "name",
    dir: "asc",
  });

  const requestSort = (key: SortKey) => {
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );
    setPage(1);
  };

  const isSortedBy = (key: SortKey) => sort.key === key;

  const upCaretClass = (key: SortKey) =>
    isSortedBy(key) && sort.dir === "asc"
      ? "text-gray-500 dark:text-gray-400"
      : "text-gray-300 dark:text-gray-400/50";

  const downCaretClass = (key: SortKey) =>
    isSortedBy(key) && sort.dir === "desc"
      ? "text-gray-500 dark:text-gray-400"
      : "text-gray-300 dark:text-gray-400/50";

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      let av: string | number;
      let bv: string | number;

      switch (sort.key) {
        case "price":
          av = parsePrice(a.price);
          bv = parsePrice(b.price);
          break;
        case "name":
        case "brand":
        case "category":
          av = normalizeStr(a[sort.key]);
          bv = normalizeStr(b[sort.key]);
          break;
        default:
          av = normalizeStr(a[sort.key]);
          bv = normalizeStr(b[sort.key]);
          break;
      }

      if (av < bv) return sort.dir === "asc" ? -1 : 1;
      if (av > bv) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [filtered, sort]);

  // ---- Paginación ----
  const [page, setPage] = useState(1);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const pageItems = useMemo(
    () => sorted.slice(startIndex, endIndex),
    [sorted, startIndex, endIndex],
  );

  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const pageList = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    // search
    query,
    setQuery,

    // data paginada
    pageItems,

    // info de paginación
    page,
    totalPages,
    total,
    start: total === 0 ? 0 : startIndex + 1,
    end: endIndex,
    canPrev,
    canNext,
    goPrev,
    goNext,
    setPage,
    pageList,

    // sort
    sort,
    requestSort,
    isSortedBy,
    upCaretClass,
    downCaretClass,
  };
}
