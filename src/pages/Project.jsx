import PageTransition from "../components/ui/PageTransition";
import FeaturedProjects from "../components/sections/FeaturedProjects";

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-white">
        <FeaturedProjects />
      </div>
    </PageTransition>
  );
}
