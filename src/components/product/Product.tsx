"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ProductRow } from "@/hooks/useProductTableLogic";

const products: ProductRow[] = [
  {
    sku: "7034020",
    name: "MacBook Pro 13”",
    variants: "2 Variants",
    brand: "Apple",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    image: "/images/product/product-01.jpg", // Replace with actual image URL
  },
  {
    sku: "7034021",
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    brand: "Apple",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    image: "/images/product/product-02.jpg", // Replace with actual image URL
  },
  {
    sku: "7034022",
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    brand: "Apple",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    image: "/images/product/product-03.jpg", // Replace with actual image URL
  },
  {
    sku: "7034023",
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    brand: "Apple",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    image: "/images/product/product-04.jpg", // Replace with actual image URL
  },
  {
    sku: "7034024",
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    brand: "Apple",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    image: "/images/product/product-05.jpg", // Replace with actual image URL
  },
  {
    sku: "7034025",
    name: "Google Pixel 8 Pro",
    variants: "2 Variants",
    brand: "Google",
    category: "Phone",
    price: "$899.00",
    status: "Pending",
    image: "/images/product/product-01.jpg", // Replace with actual image URL
  },
  {
    sku: "7034026",
    name: "ASUS ROG Gaming Laptop",
    variants: "2 Variants",
    brand: "ASUS",
    category: "Laptop",
    price: "$2,199.00",
    status: "Delivered",
    image: "/images/product/product-02.jpg", // Replace with actual image URL
  },
  {
    sku: "7034027",
    name: "ASUS ROG Gaming Laptop",
    variants: "2 Variants",
    brand: "ASUS",
    category: "Laptop",
    price: "$2,199.00",
    status: "Delivered",
    image: "/images/product/product-04.jpg", // Replace with actual image URL
  },
  {
    sku: "7034028",
    name: "ASUS ROG Gaming Laptop",
    variants: "2 Variants",
    brand: "ASUS",
    category: "Laptop",
    price: "$2,199.00",
    status: "Delivered",
    image: "/images/product/product-03.jpg", // Replace with actual image URL
  },
];

export type SortKey = "name" | "category" | "brand" | "price";

export default function Product() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const normalizeStr = (s: unknown) =>
    (s ?? "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  // biome-ignore lint/correctness/useExhaustiveDependencies: 'normalizeStr' es estable de módulo.
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
  }, [query]); // 'products' es constante de módulo

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

  // (si ya tienes sort, úsalo aquí sobre 'filtered' en vez de 'products')
  const sorted = filtered; // reemplaza por tu sort si ya lo implementaste
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const start = total === 0 ? 0 : startIndex + 1;
  const end = endIndex;

  const pageItems = useMemo(
    () => sorted.slice(startIndex, endIndex),
    [sorted, startIndex, endIndex],
  );

  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const pageList = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
      <div className="flex flex-col justify-between gap-5 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Products List
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Track your store's progress to boost your sales.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/3 dark:hover:text-gray-300 "
          >
            Export
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.667 13.3333V15.4166C16.667 16.1069 16.1074 16.6666 15.417 16.6666H4.58295C3.89259 16.6666 3.33295 16.1069 3.33295 15.4166V13.3333M10.0013 13.3333L10.0013 3.33325M6.14547 9.47942L9.99951 13.331L13.8538 9.47942"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a
            className="bg-brand-500 shadow-sm hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600"
            href="/product/add"
          >
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 10.0002H15.0006M10.0002 5V15.0006"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Product
          </a>
        </div>
      </div>
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <div className="flex gap-3 sm:justify-between">
          <div className="relative flex-1 sm:flex-auto">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
              <svg
                className="fill-current"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04199 9.37336937363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z"
                  fill=""
                />
              </svg>
            </span>
            <input
              placeholder="Search..."
              className="shadow-sm focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-none sm:w-75 sm:min-w-75 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="relative">
            <button
              className="shadow-theme-xs flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 sm:w-auto sm:min-w-25 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              type="button"
            >
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 14.0958L17.7087 14.0958"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              <th className="w-14 px-5 py-4 text-left">
                <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                  <input className="sr-only" type="checkbox" />
                  <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
                    <span className="opacity-0">
                      {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="1.6666"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
              </th>
              <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                <div
                  role="none"
                  className="flex items-center gap-3"
                  onClick={() => requestSort("name")}
                >
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Products
                  </p>
                  <span className="flex flex-col gap-0.5">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={upCaretClass("name")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={downCaretClass("name")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </th>
              <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                <div
                  role="none"
                  className="flex items-center gap-3"
                  onClick={() => requestSort("category")}
                >
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Category
                  </p>
                  <span className="flex flex-col gap-0.5">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={upCaretClass("category")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={downCaretClass("category")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </th>
              <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                <div
                  role="none"
                  className="flex items-center gap-3"
                  onClick={() => requestSort("brand")}
                >
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Brand
                  </p>
                  <span className="flex flex-col gap-0.5">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={upCaretClass("brand")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={downCaretClass("brand")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </th>
              <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                <div
                  role="none"
                  className="flex items-center gap-3"
                  onClick={() => requestSort("price")}
                >
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Price
                  </p>
                  <span className="flex flex-col gap-0.5">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={upCaretClass("price")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                    <svg
                      className={downCaretClass("price")}
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                Stock
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                Created At
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                <div className="relative">
                  <span className="sr-only">Action</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-x divide-y divide-gray-200 dark:divide-gray-800">
            {pageItems.map((product) => (
              <tr
                key={product.sku}
                className="transition hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="w-14 px-5 py-4 whitespace-nowrap">
                  <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                    <input
                      className="sr-only"
                      type="checkbox"
                      name="product-sku"
                      value={product.sku}
                    />
                    <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
                      <span className="opacity-0">
                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="1.6666"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </label>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-md"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {product.brand}
                  </p>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    ${product.price}
                  </p>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-500">
                    Out of Stock
                  </span>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    01 Dec, 2027
                  </p>
                </td>
                <td className="px-5 py-4 whitespace-nowrap" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center flex-col sm:flex-row justify-between border-t border-gray-200 px-5 py-4 dark:border-gray-800">
        <div className="pb-3 sm:pb-0">
          <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="text-gray-800 dark:text-white/90">{start}</span> to{" "}
            <span className="text-gray-800 dark:text-white/90">{end}</span> of{" "}
            <span className="text-gray-800 dark:text-white/90">{total}</span>
          </span>
        </div>
        <div className="flex w-full items-center justify-between gap-2 rounded-lg bg-gray-50 p-4 sm:w-auto sm:justify-normal sm:rounded-none sm:bg-transparent sm:p-0 dark:bg-gray-900 dark:sm:bg-transparent">
          <button
            type="button"
            disabled={!canPrev}
            onClick={goPrev}
            className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
          >
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
            <svg
              className="fill-current"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z"
              />
            </svg>
          </button>
          <span className="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">
            Page <span>{page}</span> of <span>{totalPages}</span>
          </span>
          <ul className="hidden items-center gap-0.5 sm:flex">
            {pageList.map((p) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() => setPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium ${
                    page === p
                      ? "bg-brand-500 text-white"
                      : "text-gray-700 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:text-white"
                  }`}
                >
                  <span>{p}</span>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            disabled={!canNext}
            onClick={goNext}
            className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
          >
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
            <svg
              className="fill-current"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
