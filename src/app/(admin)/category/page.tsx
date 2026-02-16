import type { Metadata } from "next";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export const metadata: Metadata = {
  title: "Tienda En Línea Admin Front | Dashboard",
  description: "This is Tienda En Línea Dashboard",
};

export default function Category() {
  return (
    <>
      <PageBreadcrumb pageTitle="Catetorias" />
      <div className="space-y-6">
        <ComponentCard title="Catetories" >
          <div className="space-y-6">
            body
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
