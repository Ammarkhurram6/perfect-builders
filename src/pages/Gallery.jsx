import { motion } from "framer-motion";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1486406146325-cacdcf6a9026?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541888946335-a81afc429450?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503387763670-d78d1c2f3781?auto=format&fit=crop&w=800&q=80",
    // ... more
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-light-gray min-h-screen">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Visuals" title="Project Gallery" />
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden h-64 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
