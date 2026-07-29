import Reveal from "./reveal";
import type { SimpleTimelineItem } from "@/lib/data";

export default function SimpleTimelineSection({
  id,
  title,
  items,
  alt = false,
}: {
  id: string;
  title: string;
  items: SimpleTimelineItem[];
  alt?: boolean;
}) {
  return (
    <section id={id} className={`py-14 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">{title}</h2>
        </Reveal>

        <div className="mt-6 flex flex-col gap-7 border-l-2 border-border pl-7">
          {items.map((item, i) => (
            <Reveal key={item.title + item.dates} delay={0.05 * i} className="relative">
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-gradient-brand shadow-[0_0_0_4px_var(--accent-soft)]" />
              <h3 className="mb-1 text-[1.05rem] font-semibold">{item.title}</h3>
              <p className="mb-0.5 text-[0.92rem] font-semibold text-accent">{item.org}</p>
              <p className="text-[0.85rem] text-text-muted">{item.dates}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
