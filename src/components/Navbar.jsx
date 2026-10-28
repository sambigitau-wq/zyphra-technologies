import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "SchoolAid", path: "/schoolaid" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LARGER LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-14 sm:h-20 w-auto flex items-center">
              <img
                src="/images/zyphra.png"
                alt="Zyphra Technologies"
                className="h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center h-10 px-3 rounded bg-brand-500 text-white font-bold tracking-widest">
                ZYPHRA
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-brand-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-sm font-semibold transition-colors shadow-sm"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;