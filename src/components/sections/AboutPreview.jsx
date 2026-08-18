import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative h-[500px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-3/4 h-3/4 bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621511075938-f03482369feb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-cover bg-center shadow-xl border-4 border-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
        </div>

        {/* Content */}
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Building With Purpose. Delivering With Precision."
          />
          <p className="text-gray-600 mb-6 leading-relaxed">
            Perfect Builders provides professional construction solutions with
            unwavering attention to quality, safety, engineering, design,
            project management, and customer satisfaction.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Quality Assurance",
              "Safety Standards",
              "Expert Engineering",
              "Modern Design",
              "Project Management",
              "Client Satisfaction",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider hover:gap-4 transition-all"
          >
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
