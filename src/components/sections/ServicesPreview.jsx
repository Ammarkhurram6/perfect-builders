import { motion } from "framer-motion";
import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Construction Services"
          subtitle="We offer a comprehensive range of construction services tailored to meet the diverse needs of our clients."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-xl bg-light-gray"
            >
              <div className="bg-charcoal w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <service.icon
                  className="text-gold group-hover:text-charcoal"
                  size={28}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
