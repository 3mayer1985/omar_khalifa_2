import Reveal from "./reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <Reveal className="mx-auto max-w-[980px] px-6 text-center">
        <h2 className="text-[1.6rem] font-bold">Get in Touch</h2>
        <p className="mt-4 mb-6 text-text-muted">
          Interested in connecting? Reach out via LinkedIn or email.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-lg bg-gradient-brand px-[22px] py-[11px] text-[0.95rem] font-semibold text-white shadow-[var(--shadow-lg)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]"
          >
            Connect on LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-lg border border-border px-[22px] py-[11px] text-[0.95rem] font-semibold text-text transition-[transform,box-shadow] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-soft)] active:translate-y-0 active:scale-[0.98]"
          >
            ✉️ Send an email
          </a>
        </div>
      </Reveal>
    </section>
  );
}
