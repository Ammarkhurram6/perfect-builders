import { Link } from "react-router-dom";

import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              PERFECT BUILDERS
            </h3>

            <p className="text-gray-400 mb-6">
              Building Dreams. Creating Landmarks.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-dark-navy p-2 rounded-sm hover:bg-gold hover:text-charcoal transition-colors"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-dark-navy p-2 rounded-sm hover:bg-gold hover:text-charcoal transition-colors"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-dark-navy p-2 rounded-sm hover:bg-gold hover:text-charcoal transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://wa.me/923367719671"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-navy p-2 rounded-sm hover:bg-gold hover:text-charcoal transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Navigation</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Architecture & Planning</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Contact Us</h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                +92 336 7719671
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                info@perfectbuilders.com
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-navy pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Perfect Builders. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
