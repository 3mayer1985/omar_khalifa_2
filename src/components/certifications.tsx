import Image from "next/image";
import Reveal from "./reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-14">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          <h2 className="text-[1.6rem] font-bold">Certifications</h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={0.08 * i}>
              <div className="h-full rounded-xl border border-border bg-card-bg p-5 shadow-[var(--shadow)] transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lg)]">
                <h3 className="mb-2.5 flex items-center gap-2 text-[1.02rem] font-semibold">
                  {cert.title === "Altium Designer-Advanced" ? (
                    <Image
                      src="/images/pcb-emoji.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="inline-block"
                    />
                  ) : (
                    <span aria-hidden>{cert.icon}</span>
                  )}
                  {cert.title}
                </h3>
                {cert.link && (
                  <p className="mt-1 text-[0.88rem] text-text-muted">
                    <a
                      href={cert.link.href}
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-accent hover:underline"
                    >
                      {cert.link.label}
                    </a>
                  </p>
                )}
                {cert.meta.map((line) => (
                  <p key={line} className="mt-1 text-[0.88rem] text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
