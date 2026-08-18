// src/pages/Services.jsx
import PageTransition from "../components/ui/PageTransition";
import ServicesPreview from "../components/sections/ServicesPreview";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-white">
        <ServicesPreview />
        <Process />
        <CTA />
      </div>
    </PageTransition>
  );
}
