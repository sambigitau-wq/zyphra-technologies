import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Rocket, Award, Sparkles, Shield, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#4A47E0]/5 rounded-full blur-3xl floating-shape-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#6C63FF]/5 to-[#4A47E0]/5 rounded-full blur-3xl"></div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="badge-premium w-fit"
            >
              <Sparkles className="w-4 h-4" />
              <span>#1 Tech Company in East Africa</span>
            </motion.div>
            
            <h1 className="section-title">
              Where<br />
              <span className="gradient-text">Technology</span><br />
              <span className="text-[#1a1a2e]">Takes Flight</span>
            </h1>
            
            <p className="section-subtitle">
              We engineer powerful software solutions that transform schools, hospitals, 
              and businesses across Africa. Innovation isn't just what we do — it's who we are.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explore Our Work <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.button>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-[#4A47E0]/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <CheckCircle className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div>
                  <div className="text-[#1a1a2e] font-bold text-lg">100+</div>
                  <div className="text-[#4a4a5a] text-sm">Projects Delivered</div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF4757]/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Award className="w-6 h-6 text-[#FF6B6B]" />
                </div>
                <div>
                  <div className="text-[#1a1a2e] font-bold text-lg">Award</div>
                  <div className="text-[#4a4a5a] text-sm">Winning Solutions</div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A47E0]/10 to-[#6C63FF]/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Shield className="w-6 h-6 text-[#4A47E0]" />
                </div>
                <div>
                  <div className="text-[#1a1a2e] font-bold text-lg">99.9%</div>
                  <div className="text-[#4a4a5a] text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: '🏫', title: 'SchoolAid', desc: 'Complete School Management', color: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
              { icon: '🏥', title: 'HealthPro', desc: 'Hospital Management System', color: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
              { icon: '💻', title: 'Web Development', desc: 'Professional Websites', color: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
              { icon: '🎨', title: 'Brand Identity', desc: 'Logo & Design Systems', color: 'from-[#FF8E8E]/10 to-[#FF6B6B]/10' },
              { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android Native', color: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
              { icon: '🔒', title: 'IT Security', desc: 'Advanced Auditing', color: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="card-premium group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition duration-500`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="text-[#1a1a2e] font-bold text-lg group-hover:text-[#6C63FF] transition duration-300">
                  {item.title}
                </div>
                <div className="text-[#4a4a5a] text-sm mt-1">{item.desc}</div>
                <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] group-hover:w-12 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
