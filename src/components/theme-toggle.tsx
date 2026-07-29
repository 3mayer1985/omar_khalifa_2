"use client";

export default function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-lg transition-transform duration-300 hover:-rotate-12 hover:scale-110 hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-soft)]"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}
