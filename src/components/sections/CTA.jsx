import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387763670-d78d1c2f3781?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Build Something Exceptional?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Tell us about your project and our team will help you take the next
          step.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/quote">Request a Free Quote</Button>
          <Button to="/contact" variant="whiteOutline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
