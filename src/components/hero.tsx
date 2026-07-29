"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-accent-soft to-bg pb-14 pt-22">
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-x-[10%] -top-[20%] h-[480px] blur-[10px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 60%), radial-gradient(circle at 75% 20%, color-mix(in srgb, var(--accent-2) 30%, transparent), transparent 55%)",
          }}
          animate={{ x: ["0%", "2%"], y: ["0%", "3%"], scale: [1, 1.08] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          aria-hidden
        />
      )}

      <div className="relative mx-auto flex max-w-[980px] flex-col items-center gap-10 px-6 sm:flex-row sm:items-center">
        <div className="h-24 w-24 shrink-0 rounded-full bg-gradient-brand p-1 shadow-[var(--shadow-lg)] sm:h-[132px] sm:w-[132px]">
          <Image
            src="/images/omar-photo.jpg"
            alt="Omar Khalifa"
            width={132}
            height={132}
            priority
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-[0.8rem] font-semibold tracking-[0.08em] text-accent uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="text-gradient-brand mb-3 text-[2rem] font-bold tracking-tight sm:text-[2.8rem]">
            {profile.name}
          </h1>
          <p className="mb-5 max-w-[620px] text-[1.05rem] text-text-muted sm:text-[1.1rem]">
            {profile.tagline}
          </p>

          <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[0.95rem] text-text-muted">
            <span className="inline-flex items-center gap-1.5">📍 {profile.location}</span>
            <span className="inline-flex items-center gap-1.5">
              <Image src="/images/ST_2.jpg" alt="STMicroelectronics" width={16} height={16} className="object-contain" />
              {profile.company}
            </span>
            <span className="inline-flex items-center gap-1.5">
              🏅{" "}
              <a
                href={profile.pmpCredly}
                target="_blank"
                rel="noopener"
                className="font-semibold text-accent hover:underline"
              >
                PMP® Certified (Link)
              </a>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1.5 text-[0.85rem] font-semibold text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Open to new opportunities
            </span>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-block rounded-lg bg-gradient-brand px-[22px] py-[11px] text-[0.95rem] font-semibold text-white shadow-[var(--shadow-lg)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]"
            >
              View LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-block rounded-lg border border-border px-[22px] py-[11px] text-[0.95rem] font-semibold text-text transition-[transform,box-shadow] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-soft)] active:translate-y-0 active:scale-[0.98]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
