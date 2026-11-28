

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Category } from "../types/category";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      aria-label={`Explore ${category.name}`}
      className="group relative block overflow-hidden rounded-xl bg-surface"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-5">
          <div>
            <h2 className="text-lg font-bold leading-tight sm:text-xl">
              {category.name}
            </h2>

            <p className="mt-2 hidden max-w-xs text-sm leading-5 text-white/80 sm:block">
              {category.description}
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
