import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import AboutPreview from "../components/sections/AboutPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import PageTransition from "../components/ui/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTA />
    </PageTransition>
  );
}
