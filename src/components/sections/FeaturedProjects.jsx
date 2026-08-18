import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "../../data/project";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Our Featured Projects"
          subtitle="Explore some of our finest construction and architectural projects."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-gold text-charcoal"
                  : "bg-white text-charcoal hover:bg-charcoal hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block relative h-[500px] overflow-hidden"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                      {project.category} | {project.location}
                    </span>
                    <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-charcoal" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
