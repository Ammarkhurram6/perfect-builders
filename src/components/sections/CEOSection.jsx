import { motion } from "framer-motion";
import { Quote } from "lucide-react";
// This imports your local image from the assets folder
import ceoImage from "../../assets/ceo.png";

export default function CEOSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 hidden sm:block"></div>
            <div className="relative overflow-hidden w-full max-w-md aspect-[4/5] shadow-2xl">
              <img
                src={ceoImage}
                alt="CEO of Perfect Builders"
                className="w-full h-full object-cover"
              />
              {/* Gold gradient overlay at bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <span className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              <Quote size={20} /> A Message From Our Founder
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Building Trust,{" "}
              <span className="text-gold">One Landmark at a Time.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              "At Perfect Builders, we don’t just construct buildings; we build
              lasting relationships and bring architectural visions to life. For
              over 36 years, my team and I have been dedicated to redefining the
              construction industry through precision, transparency, and
              uncompromising quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              When you trust us with your project, you aren't just hiring a
              contractor—you are partnering with a team that treats your vision
              as its own. We believe that true luxury lies in the details, and
              we ensure every brick, beam, and finish reflects our commitment to
              excellence. Thank you for considering us to build your next
              landmark."
            </p>

            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-2xl font-heading font-bold text-charcoal">
                Haji Tahir Mahmood
              </h4>
              <p className="text-gold uppercase tracking-wider text-sm font-semibold mt-1">
                Founder & Chief Executive Officer
              </p>
              <p className="text-gray-500 text-sm mt-1">Perfect Builders</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
