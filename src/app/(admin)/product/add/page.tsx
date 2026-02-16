import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { AddProduct } from "@/components/product/AddProduct";

export const metadata: Metadata = {
  title: "Tienda En Línea Admin Front | Product List",
  description: "This is Tienda En Línea Dashboard",
};

export default function AddProductPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Agregar Producto" />
      <AddProduct />
    </>
  );
}
