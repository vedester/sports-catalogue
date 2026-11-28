

import type { Metadata } from "next";

import CategoryCard from "@/features/categories/components/category-card";
import { categories } from "@/features/categories/data/categories";

export const metadata: Metadata = {
  title: "Shop by Category",
  description:
    "Explore sports apparel, footwear and equipment at Sports Catalogue.",
};

export default function CategoriesPage() {
  return (
    <main>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Find your gear
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Shop by category
            </h1>

            <p className="mt-4 text-base leading-7 text-muted">
              Browse our collection of sports apparel, footwear and
              equipment. Find the right products for your sporting needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
