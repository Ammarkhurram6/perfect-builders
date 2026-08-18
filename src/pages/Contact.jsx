import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Simulate API call
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data (Ready for MongoDB):", formData);
    // Future: await axios.post('/api/contact', formData)
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            subtitle="Have a project in mind? Let's talk."
          />

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">+92 336 7719671</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-600">info@perfectbuilders.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-600">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-light-gray p-8 shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    Your inquiry has been submitted. We will contact you
                    shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Project Type"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Estimated Budget"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required
                    onChange={handleChange}
                    className="w-full md:col-span-2 px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gold"
                  ></textarea>
                  <div className="md:col-span-2">
                    <Button type="submit">Submit Inquiry</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
