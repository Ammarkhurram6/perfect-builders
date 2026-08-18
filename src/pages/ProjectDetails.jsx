import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, User, Check } from "lucide-react";
import { projects } from "../data/project";
import Button from "../components/ui/Button";
import PageTransition from "../components/ui/PageTransition";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button to="/projects">Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative h-[70vh] flex items-end justify-center overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container mx-auto px-6 relative z-10 pb-16 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <div className="flex justify-center gap-8 text-sm uppercase tracking-widest text-gold">
            <span>{project.category}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {project.images.slice(1).map((img, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  src={img}
                  alt={`${project.title} ${i + 2}`}
                  className="w-full h-48 object-cover"
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">Construction Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <Check className="text-gold" size={20} /> {h}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white p-8 shadow-lg h-fit sticky top-24">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-4">
              Project Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500 uppercase">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500 uppercase">Location</p>
                  <p className="font-semibold">{project.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500 uppercase">Completed</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                {Object.entries(project.stats).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-gold font-bold text-xl">{val}</p>
                    <p className="text-xs text-gray-500 uppercase">{key}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button to="/quote" className="w-full mt-8">
              Request Similar Project
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
