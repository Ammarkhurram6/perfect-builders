import { motion } from "framer-motion";
import { DraftingCompass } from "lucide-react";
import architectImage from "../../assets/architect.png";

export default function ArchitectSection() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Content Section (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              <DraftingCompass size={20} /> Designer & Architecture
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Where Visionary Design Meets{" "}
              <span className="text-gold">Structural Reality.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              "Architecture is not just about building structures; it is about
              sculpting the spaces where life happens. As the Lead Architect and
              Designer at Perfect Builders, my philosophy is rooted in blending
              aesthetic brilliance with functional design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every line we draw and every space we create is tailored to
              reflect the unique vision of our clients while standing the test
              of time. From the initial concept to the final interior finish, we
              ensure that design and engineering move forward as one unified
              vision. Let us design a space that truly inspires you."
            </p>

            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-2xl font-heading font-bold text-charcoal">
                Mr. Ahtsham Tahir
              </h4>
              <p className="text-gold uppercase tracking-wider text-sm font-semibold mt-1">
                Principal Architect & Lead Designer
              </p>
              <p className="text-gray-500 text-sm mt-1">Perfect Builders</p>
            </div>
          </motion.div>

          {/* Image Section (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:order-2 relative flex justify-center"
          >
            {/* Mirrored Gold Border */}
            <div className="absolute inset-0 border-2 border-gold -translate-x-4 -translate-y-4 hidden sm:block"></div>
            <div className="relative overflow-hidden w-full max-w-md aspect-[4/5] shadow-2xl">
              <img
                src={architectImage}
                alt="Mr. Ahtsham Tahir, Principal Architect"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
