// src/app/(store)/products/page.ts
import type { Metadata } from "next";

import ProductCatalogue from "@/features/products/components/product-catalogue";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse sports equipment, footwear and apparel. Find the right gear for your game.",
};

export default function ProductsPage() {
  return <ProductCatalogue />;
}