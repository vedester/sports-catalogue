// src/features/products/components/featured-products.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProductCard from "./product-card";
import { featuredProducts } from "../data/featured-products";

export default function FeaturedProducts() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Handpicked for you
            </p>

            <h2
              id="featured-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Featured products
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              Explore some of our highlighted sports essentials.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View all products
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}