import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Experience from "@/components/experience";
import SimpleTimelineSection from "@/components/simple-timeline";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Languages from "@/components/languages";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { internships, education } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <main>
        <About />
        <Experience />
        <SimpleTimelineSection id="internships" title="Internships" items={internships} />
        <SimpleTimelineSection id="education" title="Education" items={education} alt />
        <Skills />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
