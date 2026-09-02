import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'SchoolAid', path: '/schoolaid' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-xl' : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white px-4 py-2 rounded-xl border border-gray-100/50 shadow-lg">
                <span className="text-[#1a1a2e] font-bold text-2xl tracking-tight">ZYPHRA</span>
                <span className="text-[#6C63FF] text-[10px] tracking-[0.2em] block -mt-1 font-medium">TECHNOLOGIES</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-[#6C63FF] bg-gradient-to-r from-[#6C63FF]/10 to-[#4A47E0]/10' 
                    : 'text-[#4a4a5a] hover:text-[#1a1a2e] hover:bg-gray-100/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-3 py-2.5 px-6 text-sm">
              <Sparkles className="w-4 h-4" />
              Get Started
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#1a1a2e] p-2 hover:bg-gray-100/80 rounded-xl transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/80 px-4 py-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`block px-5 py-3.5 rounded-xl text-base font-medium transition ${
                location.pathname === link.path 
                  ? 'text-[#6C63FF] bg-gradient-to-r from-[#6C63FF]/10 to-[#4A47E0]/10' 
                  : 'text-[#4a4a5a] hover:text-[#1a1a2e] hover:bg-gray-100/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full btn-primary justify-center text-center"
          >
            <Zap className="w-4 h-4" />
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
