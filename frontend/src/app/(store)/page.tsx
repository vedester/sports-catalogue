
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";


import CategorySection from "@/features/categories/components/category-section";
import FeaturedProducts from "@/features/products/components/featured-products";

export default function Home() {
  return (
        
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          {/* Hero content */}
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              The sports collection
            </p>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Gear up.
              <br />
              Play harder.
              <br />
              <span className="text-primary">Go further.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
              Discover sports equipment, footwear and apparel designed to
              support every game, every training session and every ambition.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore the shop
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/#categories"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Browse categories
                <ArrowDown size={17} />
              </Link>
            </div>

            <p className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-muted-subtle">
              Equipment · Footwear · Apparel · Accessories
            </p>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/hero/football-action.jpg"
                alt="Football action photograph representing the sports collection"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Built around your game
                </p>
                <p className="mt-2 text-2xl font-bold sm:text-3xl">
                  Find your edge.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 -z-10 h-32 w-32 rounded-2xl bg-primary/15 sm:-right-4 sm:h-40 sm:w-40" />
          </div>
        </section>
          <CategorySection />

          <FeaturedProducts />
      </main>
        
      );
}
