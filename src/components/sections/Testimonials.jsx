import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />

        <div className="max-w-4xl mx-auto text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium text-charcoal italic mb-8 leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold">{testimonials[index].name}</h4>
              <p className="text-gold uppercase tracking-wider text-sm">
                {testimonials[index].project}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-3 border border-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
