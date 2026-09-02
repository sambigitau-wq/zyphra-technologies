import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f1a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#4A47E0]/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] rounded-xl blur opacity-30"></div>
              <div className="relative bg-[#0f0f1a] px-4 py-2 rounded-xl inline-block border border-white/5">
                <span className="text-white font-bold text-2xl tracking-tight">ZYPHRA</span>
                <span className="text-[#6C63FF] text-[10px] tracking-[0.2em] block -mt-1 font-medium">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Where Technology Takes Flight — Building innovative solutions for a better Africa.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#6C63FF]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#6C63FF]/20 border border-white/5">
                <span className="text-gray-400 hover:text-white transition text-xl">🌐</span>
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#6C63FF]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#6C63FF]/20 border border-white/5">
                <span className="text-gray-400 hover:text-white transition text-xl">📧</span>
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#6C63FF]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#6C63FF]/20 border border-white/5">
                <span className="text-gray-400 hover:text-[#FF6B6B] transition text-xl">❤️</span>
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#6C63FF]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#6C63FF]/20 border border-white/5">
                <span className="text-gray-400 hover:text-[#FFD700] transition text-xl">⚡</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/schoolaid" className="text-gray-400 hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  SchoolAid
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#6C63FF]/20 transition">
                  <span className="text-[#6C63FF] text-xl">📧</span>
                </div>
                <span className="break-all">technologieszyphra@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#6C63FF]/20 transition">
                  <span className="text-[#6C63FF] text-xl">📱</span>
                </div>
                <span>+254 180 559 352</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xl">📍</span>
                </div>
                <span>Thika, Kenya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Subscribe to get the latest news and updates from Zyphra.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#6C63FF] outline-none transition placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/25 transition-all duration-300 hover:scale-105">
                <span className="text-xl">⚡</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zyphra Technologies. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <span className="text-[#FF6B6B] text-xl">❤️</span> in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
