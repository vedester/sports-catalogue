// frontend/src/components/layout/site-header.tsx

import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Categories", href: "/#categories" },
  { label: "Featured", href: "/#featured" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">

      {/* Announcement */}
      <div className="bg-foreground px-4 py-2.5 text-center text-sm font-medium tracking-wide text-background">
        Discover your next favourite sports essential.
      </div>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Brand */}
        <Link
          href="/"
          aria-label="Sports Catalogue home"
          className="text-2xl font-black tracking-[-0.07em]"
        >
          SPORTS<span className="text-primary">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Link
            href="/products"
            className="hidden min-h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 sm:inline-flex"
          >
            Shop Now
          </Link>

          {/* Mobile navigation */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden"
            >
              <Menu size={19} strokeWidth={1.8} aria-hidden="true"/>
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 w-64 rounded-xl border border-border bg-surface p-3 shadow-2xl"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/products"
                className="mt-2 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Shop Now
              </Link>
            </nav>
          </details>

        </div>
      </div>
    </header>
  );
}
