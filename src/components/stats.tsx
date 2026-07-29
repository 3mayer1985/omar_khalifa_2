"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const duration = 1400;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, value]);

  const shown = reduceMotion && inView ? value : display;

  return (
    <div
      ref={ref}
      className="text-gradient-brand text-[1.6rem] font-bold tabular-nums sm:text-[2.1rem]"
    >
      {shown.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-6 px-6 py-9 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <div className="mt-1 text-[0.85rem] text-text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
