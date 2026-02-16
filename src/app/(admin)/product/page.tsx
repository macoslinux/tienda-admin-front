import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Product from "@/components/product/Product";

export const metadata: Metadata = {
    title: "Tienda En Línea Admin Front | Product List",
    description: "This is Tienda En Línea Dashboard",
};

export default function ProductPage() {

    return (
        <>
            <PageBreadcrumb pageTitle="Productos" />
            <Product />
        </>
    );
}
