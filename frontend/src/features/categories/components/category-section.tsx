// src/features/categories/components/category-section.tsx

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { categories } from "../data/categories";
import CategoryCard from "./category-card";

export default function CategorySection() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Find your gear
            </p>

            <h2
              id="categories-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Explore by category
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              Discover the equipment, apparel and footwear you need for your
              next game.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Explore all categories
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
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
  );
}
