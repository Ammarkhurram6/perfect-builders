// src/pages/About.jsx
import PageTransition from "../components/ui/PageTransition";
import AboutPreview from "../components/sections/AboutPreview";
import Stats from "../components/sections/Stats";
import CTA from "../components/sections/CTA";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-white">
        <AboutPreview />
        <Stats />
        <CTA />
      </div>
    </PageTransition>
  );
}
