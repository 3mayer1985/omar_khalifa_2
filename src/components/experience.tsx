import Reveal from "./reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-alt py-14">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">Experience</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-2 mb-7 text-text-muted">
            17 years, 4 roles — from IC design CAD support to leading Post Silicon validation
            projects.
          </p>
        </Reveal>

        <div className="flex flex-col gap-9 border-l-2 border-border pl-7">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i} className="relative">
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-gradient-brand shadow-[0_0_0_4px_var(--accent-soft)]" />
              <h3 className="mb-1 text-[1.15rem] font-semibold">{item.title}</h3>
              <p className="mb-2 text-[0.92rem] font-semibold text-accent">{item.org}</p>
              <ul className="mb-3.5 flex max-w-[640px] flex-col gap-1.5 text-text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc pl-1 marker:text-border">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card-bg px-3 py-1 text-[0.78rem] font-medium shadow-[var(--shadow)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
