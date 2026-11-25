// frontend/src/components/layout/site-header.tsx


import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">

        {/* Brand information */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            SPORTS<span className="text-primary">.</span>
          </Link>

          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Discover quality sports equipment, footwear, apparel and
            accessories. Find the right gear for every game.
          </p>
        </div>

        {/* Shopping links */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Explore
          </h2>

          <ul className="mt-4 space-y-3 text-base text-muted">
            <li>
              <Link href="/products" className="hover:text-primary">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="hover:text-primary">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/#featured" className="hover:text-primary">
                Featured Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer information */}
        <div>
          <h2 className="text-sm font-bold">
            Customer Support
          </h2>

          <ul className="mt-4 space-y-3 text-md text-muted">
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Built for every game.
          </p>
        </div>
      </div>

    </footer>
  );
}

