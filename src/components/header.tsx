"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-4 px-6 py-4">
        <div className="text-gradient-brand text-lg font-bold">Omar Khalifa</div>

        <nav className="ml-auto mr-5 hidden gap-[22px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative pb-0.5 text-[0.95rem] whitespace-nowrap transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:rounded-full after:bg-gradient-brand after:transition-all after:duration-300 ${
                activeId === link.href.slice(1)
                  ? "font-semibold text-text after:right-0"
                  : "text-text-muted after:right-full hover:text-text hover:after:right-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-lg border border-border md:hidden"
        >
          <span
            className={`block h-0.5 w-4 rounded bg-text transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-4 rounded bg-text transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-4 rounded bg-text transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-border px-6 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3 text-text-muted last:border-none hover:pl-1.5 hover:text-accent transition-[padding,color]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div
        className="absolute -bottom-px left-0 h-[2.5px] rounded-r bg-gradient-brand transition-[width]"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </header>
  );
}
