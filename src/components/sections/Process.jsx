import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Discuss requirements, budget and vision.",
  },
  {
    num: "02",
    title: "Planning & Design",
    desc: "Develop the project plan and design direction.",
  },
  {
    num: "03",
    title: "Estimation",
    desc: "Prepare transparent project estimates and timelines.",
  },
  {
    num: "04",
    title: "Construction",
    desc: "Our team begins construction with continuous supervision.",
  },
  {
    num: "05",
    title: "Quality Inspection",
    desc: "Every stage is inspected for quality and compliance.",
  },
  {
    num: "06",
    title: "Handover",
    desc: "Final inspection and project handover.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Construction Process"
          light
          subtitle="A structured approach designed to deliver exceptional results every time."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border border-dark-navy"
            >
              <span className="block text-5xl font-bold text-gold/20 mb-4">
                {step.num}
              </span>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
