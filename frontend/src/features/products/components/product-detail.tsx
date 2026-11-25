

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import type { Product } from "../types/product";
import ProductCard from "./product-card";
import { products } from "../data/products";

type ProductDetailProps = {
  product: Product;
};

const WHATSAPP_NUMBER = ""; // Add your business number with country code, without +

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category,
    )
    .slice(0, 4);

  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(product.price);

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Quantity: ${quantity}\n` +
      `Price: ${formattedPrice}\n\n` +
      `Please share more information about availability.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  return (
    <>
      <main>
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Link
              href="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Back to products
            </Link>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Product image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {product.featured && (
                  <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                    Featured product
                  </span>
                )}
              </div>

              {/* Product information */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {product.category}
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                <p className="mt-6 text-2xl font-bold">
                  {formattedPrice}
                </p>

                <div className="my-8 border-t border-border" />

                <h2 className="text-base font-semibold">
                  Product information
                </h2>

                <p className="mt-3 leading-7 text-muted">
                  Discover the {product.name}, available from Sports
                  Catalogue. Contact our team for product details,
                  availability and ordering assistance.
                </p>

                <div className="mt-8">
                  <label className="text-sm font-semibold">
                    Quantity
                  </label>

                  <div className="mt-3 flex h-12 w-36 items-center justify-between rounded-lg border border-border bg-surface">
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                      className="flex h-full w-11 items-center justify-center text-muted transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus size={17} />
                    </button>

                    <span
                      className="text-sm font-semibold tabular-nums"
                      aria-live="polite"
                    >
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      aria-label="Increase quantity"
                      className="flex h-full w-11 items-center justify-center text-muted transition-colors hover:text-primary"
                    >
                      <Plus size={17} />
                    </button>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!WHATSAPP_NUMBER}
                  onClick={(event) => {
                    if (!WHATSAPP_NUMBER) {
                      event.preventDefault();
                    }
                  }}
                  className={`mt-8 flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 text-sm font-semibold transition-all ${
                    WHATSAPP_NUMBER
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                      : "cursor-not-allowed bg-muted/20 text-muted"
                  }`}
                >
                  <ShoppingBag size={19} aria-hidden="true" />
                  {WHATSAPP_NUMBER
                    ? "Order via WhatsApp"
                    : "WhatsApp ordering coming soon"}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-muted">
                  Contact us to confirm product availability and
                  ordering details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    You may also like
                  </p>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Related products
                  </h2>
                </div>

                <Link
                  href="/products"
                  className="hidden items-center gap-2 text-sm font-semibold text-primary hover:underline sm:inline-flex"
                >
                  View all
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
