import Reveal from "./reveal";
import { about, aboutCoreStrengths } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">About</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-[720px] text-[1.05rem] text-text-muted">{about}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[720px] text-[1.05rem] text-text-muted">
            <span className="font-semibold text-text">Core strengths: </span>
            {aboutCoreStrengths}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
