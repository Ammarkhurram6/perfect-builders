import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "framer-motion";

const statsData = [
  { value: 15, suffix: "+", label: "Years Industry Experience" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }) {
  const count = useMotionValue(0);
  const rounded = useMotionValue(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        onUpdate: (v) => rounded.set(Math.round(v)),
      });
      return controls.stop;
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-charcoal text-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-5xl md:text-6xl font-bold text-gold mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-gray-400 uppercase tracking-wide text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
