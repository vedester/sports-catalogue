// frontend/src/features/products/components/product-card.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="group min-w-0">
      <Link
        href={`/products/${product.slug}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Featured
            </span>
          )}

          <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight size={19} aria-hidden="true" />
          </span>
        </div>

        <div className="pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {product.category}
          </p>

          <h3 className="mt-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:text-base">
            {product.name}
          </h3>

          <p className="mt-2 text-sm font-bold text-foreground">
            {formattedPrice}
          </p>
        </div>
      </Link>
    </article>
  );
}
