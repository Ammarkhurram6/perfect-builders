import { useState } from "react";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    propertyType: "",
    location: "",
    budget: "",
    startDate: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Data (Ready for MongoDB):", formData);
    // Future: await axios.post('/api/quotes', formData)
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-light-gray">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            eyebrow="Start Your Project"
            title="Get a Free Quote"
            subtitle="Fill out the form below to receive a personalized quote."
          />

          {submitted ? (
            <div className="bg-white p-12 shadow-sm text-center">
              <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for your interest. Our team will review your details
                and get back to you within 24 hours.
              </p>
              <Button to="/" variant="outline">
                Back to Home
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 shadow-sm grid md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                name="projectType"
                placeholder="Project Type"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                name="propertyType"
                placeholder="Property Type"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                name="budget"
                placeholder="Approximate Budget"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              />
              <input
                type="date"
                name="startDate"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold text-gray-500"
              />
              <textarea
                name="description"
                placeholder="Project Description"
                rows="4"
                required
                onChange={handleChange}
                className="w-full md:col-span-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
              ></textarea>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
