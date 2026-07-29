import Reveal from "./reveal";
import { languages } from "@/lib/data";

export default function Languages() {
  return (
    <section id="languages" className="bg-bg-alt py-14">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">Languages</h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {languages.map((lang, i) => (
            <Reveal key={lang.name} delay={0.08 * i}>
              <div className="h-full rounded-xl border border-border bg-card-bg p-5 shadow-[var(--shadow)] transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lg)]">
                <h3 className="text-[1.02rem] font-semibold">{lang.name}</h3>
                <p className="mt-1 text-[0.88rem] text-text-muted">{lang.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
