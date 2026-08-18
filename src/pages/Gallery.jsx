import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import { galleryImages } from "../data/galleryData";

export default function Gallery() {
  // Track the index of the clicked image (null if lightbox is closed)
  const [currentIndex, setCurrentIndex] = useState(null);

  // Navigation functions
  const handleNext = (e) => {
    e.stopPropagation(); // Prevents the modal from closing when clicking the button
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length); // Wraps around to 0
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    ); // Wraps around to end
  };

  // Keyboard Navigation (Left/Right/Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-light-gray min-h-screen">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Project Gallery"
            subtitle="A visual showcase of our craftsmanship, attention to detail, and completed landmarks."
          />

          {/* Masonry Grid Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="relative group overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setCurrentIndex(i)} // Set the index on click
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <ZoomIn className="text-white mx-auto mb-2" size={32} />
                    <span className="text-white text-sm uppercase tracking-widest font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setCurrentIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(null);
              }}
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-gold transition-colors z-50 p-2 rounded-full bg-charcoal/50 hover:bg-charcoal"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image with changing animation */}
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-gold transition-colors z-50 p-2 rounded-full bg-charcoal/50 hover:bg-charcoal"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>

            {/* Caption */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
              <p className="text-gold uppercase tracking-widest text-sm mb-1">
                {galleryImages[currentIndex].category}
              </p>
              <p className="text-xl font-heading">
                {galleryImages[currentIndex].alt}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
