
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Moon
        className="theme-icon-moon h-[18px] w-[18px]"
        strokeWidth={1.8}
        aria-hidden="true"
      />

      <Sun
        className="theme-icon-sun h-[18px] w-[18px]"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </button>
  );
}
