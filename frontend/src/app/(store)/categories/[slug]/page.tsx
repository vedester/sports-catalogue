

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import ProductCard from "@/features/products/components/product-card";
import { products } from "@/features/products/data/products";
import { categories } from "@/features/categories/data/categories";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.name,
  );

  return (
    <main>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Link
            href="/categories"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            All categories
          </Link>

          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Explore our collection
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {category.name}
            </h1>

            <p className="mt-4 leading-7 text-muted">
              {category.description}
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <p className="text-sm text-muted" aria-live="polite">
              Showing {categoryProducts.length}{" "}
              {categoryProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-surface px-5 py-16 text-center">
              <h2 className="text-lg font-semibold">
                No products available yet
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted">
                We&apos;re working on adding products to this category.
                Please check back later.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
