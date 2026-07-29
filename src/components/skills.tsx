import Reveal from "./reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-alt py-14">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">Skills</h2>
        </Reveal>

        {skillGroups.map((group, i) => (
          <div key={group.title} className={i === 0 ? "mt-5" : "mt-7"}>
            <Reveal>
              <h3 className="mb-3 text-[1rem] font-semibold">{group.title}</h3>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex max-w-[800px] flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag-pill rounded-full border border-border bg-card-bg px-4 py-2 text-[0.9rem] font-medium shadow-[var(--shadow)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
