// src/features/categories/components/category-section.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

const categories: Category[] = [
  {
    name: "Men's Kits",
    slug: "mens-kits",
    description: "Match-day essentials and training wear.",
    image: "/images/categories/mens-kits.jpg",
  },
  {
    name: "Women's Kits",
    slug: "womens-kits",
    description: "Sportswear made for every game.",
    image: "/images/categories/womens-kits.jpg",
  },
  {
    name: "Kids' Kits",
    slug: "kids-kits",
    description: "Get young athletes ready to play.",
    image: "/images/categories/kids-kits.jpg",
  },
  {
    name: "Sports Footwear",
    slug: "sports-footwear",
    description: "Find the right footwear for your game.",
    image: "/images/categories/sports-footwear.jpg",
  },
];

export default function CategorySection() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
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
            href="/products"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View all products
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              aria-label={`Explore ${category.name}`}
              className="group relative block overflow-hidden rounded-xl bg-background"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                {/* Category information */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold leading-tight sm:text-xl">
                        {category.name}
                      </h3>

                      <p className="mt-2 hidden text-sm leading-5 text-white/80 sm:block">
                        {category.description}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}