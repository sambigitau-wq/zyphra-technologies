import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5B52E8] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center p-1">
                <img src="/images/zyphra.png" alt="Zyphra Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold">Zyphra Technologies</span>
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Where Technology Takes Flight. We build software, websites, and digital products that help organizations work smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-indigo-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-indigo-100 hover:text-white transition text-sm">Home</Link></li>
              <li><Link to="/about" className="text-indigo-100 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-indigo-100 hover:text-white transition text-sm">Services</Link></li>
              <li><Link to="/schoolaid" className="text-indigo-100 hover:text-white transition text-sm">SchoolAid</Link></li>
              <li><Link to="/contact" className="text-indigo-100 hover:text-white transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-indigo-200">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-indigo-100">
                <MapPin size={18} className="shrink-0 text-indigo-300 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-indigo-100">
                <Mail size={18} className="shrink-0 text-indigo-300 mt-0.5" />
                <a href="mailto:technologieszyphra@gmail.com" className="hover:text-white transition">technologieszyphra@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-indigo-100">
                <Phone size={18} className="shrink-0 text-indigo-300 mt-0.5" />
                <a href="tel:+254180559352" className="hover:text-white transition">+254 180 559 352</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-indigo-200">
          <p>© {new Date().getFullYear()} Zyphra Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
