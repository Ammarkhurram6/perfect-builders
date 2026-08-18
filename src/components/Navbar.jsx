import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if the current page is the Home page
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Only use scroll listener on the Home page
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Set initial state on load
    } else {
      // Force solid background immediately on all other pages
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]); // Re-run this effect when the page (route) changes

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-heading text-2xl font-bold ${scrolled ? "text-charcoal" : "text-white"}`}
          >
            PERFECT BUILDERS
          </span>
          <span
            className={`text-xs tracking-[0.3em] mt-1 ${scrolled ? "text-gold" : "text-light-gold"}`}
          >
            BUILDING DREAMS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-gold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/quote">Get a Free Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {scrolled ? (
            isOpen ? (
              <X className="text-charcoal" />
            ) : (
              <Menu className="text-charcoal" />
            )
          ) : isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal text-white overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-lg font-semibold uppercase tracking-wide hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Button to="/quote" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
