
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import ProductCard from "./product-card";
import { products } from "../data/products";

const categories = [
  "All",
  "Sports Apparel",
  "Sports Footwear",
  "Sports Equipment",
];

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export default function ProductCatalogue() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return Number(Boolean(b.featured)) -
            Number(Boolean(a.featured));
      }
    });
  }, [search, category, sort]);

  const hasFilters = search.length > 0 || category !== "All";

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setSort("featured");
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Find your equipment
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Shop all products
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Explore sports equipment, footwear and apparel for your
            training sessions and everyday sporting needs.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={19}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-subtle"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="h-12 w-full rounded-lg border border-border bg-surface pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-subtle focus:border-primary focus:ring-2 focus:ring-ring/20"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal
              size={18}
              aria-hidden="true"
              className="shrink-0 text-muted"
            />

            <label htmlFor="product-sort" className="sr-only">
              Sort products
            </label>

            <select
              id="product-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as SortOption)
              }
              className="h-12 min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 text-sm text-foreground outline-none focus:border-primary sm:min-w-52"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-9 flex min-h-8 items-center justify-between gap-4">
          <p className="text-sm text-muted" aria-live="polite">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Clear filters
              <X size={15} aria-hidden="true" />
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-16 text-center">
            <h2 className="text-lg font-semibold">
              No products found
            </h2>

            <p className="mt-2 text-sm text-muted">
              Try another search term or change your category filter.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
