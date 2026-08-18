const projectCategories = ["All", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    slug: "the-grand-villa",
    title: "The Grand Villa",
    category: "Residential",
    location: "Lahore, Pakistan",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A premium residential project combining modern architecture, elegant interiors and high-quality construction.",
    features: [
      "Modern architectural design",
      "Premium finishing",
      "Custom interior work",
      "Professional project management",
    ],
  },

  {
    id: 2,
    slug: "modern-heights",
    title: "Modern Heights",
    category: "Commercial",
    location: "Islamabad, Pakistan",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A contemporary commercial development designed for modern businesses and professional environments.",
    features: [
      "Contemporary architecture",
      "Commercial-grade construction",
      "Modern infrastructure",
      "Efficient space planning",
    ],
  },

  {
    id: 3,
    slug: "elite-residence",
    title: "Elite Residence",
    category: "Residential",
    location: "Lahore, Pakistan",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A sophisticated residential project focused on comfort, functionality and timeless design.",
    features: [
      "Luxury residential design",
      "Premium materials",
      "Detailed finishing",
      "Custom planning",
    ],
  },

  {
    id: 4,
    slug: "urban-business-center",
    title: "Urban Business Center",
    category: "Commercial",
    location: "Islamabad, Pakistan",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A modern business facility built with functionality, accessibility and professional aesthetics in mind.",
    features: [
      "Modern office spaces",
      "Professional interiors",
      "Efficient layout",
      "Quality construction",
    ],
  },
];

export { projects, projectCategories };
export default projects;
