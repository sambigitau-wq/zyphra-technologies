import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Smartphone, Shield, Users, 
  Palette, PenTool, Search, BarChart, Lock, Globe, Zap,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: Code, 
      title: 'Custom Software Engineering', 
      desc: 'Enterprise-grade solutions crafted with cutting-edge technology.',
      details: ['Web Apps', 'Desktop Software', 'API Development'],
      gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10'
    },
    { 
      icon: Palette, 
      title: 'Logo & Brand Identity', 
      desc: 'Distinctive brand identities that leave lasting impressions.',
      details: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10'
    },
    { 
      icon: PenTool, 
      title: 'Website Design & Development', 
      desc: 'High-performance websites that captivate and convert.',
      details: ['UI/UX Design', 'E-commerce', 'Landing Pages'],
      gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10'
    },
    { 
      icon: Database, 
      title: 'SchoolAid Management', 
      desc: 'Revolutionizing education management in Kenya.',
      details: ['Student Management', 'Fee Tracking', 'Exam Management'],
      gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10'
    },
    { 
      icon: Shield, 
      title: 'IT Security & Auditing', 
      desc: 'Enterprise-grade security solutions and compliance.',
      details: ['Security Audits', 'Penetration Testing', 'Data Protection'],
      gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10'
    },
    { 
      icon: Cloud, 
      title: 'Cloud Infrastructure', 
      desc: 'Scalable cloud solutions engineered for growth.',
      details: ['Cloud Migration', 'AWS/Azure', 'Data Backup'],
      gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile App Development', 
      desc: 'Native and cross-platform mobile experiences.',
      details: ['iOS Apps', 'Android Apps', 'Cross-Platform'],
      gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10'
    },
    { 
      icon: Search, 
      title: 'Digital Marketing & SEO', 
      desc: 'Data-driven strategies for online dominance.',
      details: ['SEO Optimization', 'Content Marketing', 'Social Media'],
      gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10'
    },
    { 
      icon: BarChart, 
      title: 'Data Analytics & Insights', 
      desc: 'Transform data into strategic business advantages.',
      details: ['Business Intelligence', 'Data Visualization', 'Reporting'],
      gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10'
    },
    { 
      icon: Users, 
      title: 'Training & Support', 
      desc: 'Comprehensive training and world-class support.',
      details: ['Staff Training', 'Ongoing Support', 'Maintenance'],
      gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10'
    },
    { 
      icon: Lock, 
      title: 'Cybersecurity Solutions', 
      desc: 'Next-generation protection against cyber threats.',
      details: ['Firewall Setup', 'Malware Protection', 'Monitoring'],
      gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10'
    },
    { 
      icon: Globe, 
      title: 'Web Hosting & Maintenance', 
      desc: 'Reliable hosting with 24/7 enterprise support.',
      details: ['Domain Management', 'Hosting', 'Maintenance'],
      gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10'
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-50/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="badge-premium mx-auto w-fit mb-6">
            <Zap className="w-4 h-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="section-title mb-6">
            World-Class <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We engineer technology that transforms organizations and drives meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="card-premium group hover:shadow-[0_20px_60px_-15px_rgba(108,99,255,0.15)]"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition duration-500`}>
                <service.icon className="w-7 h-7 text-[#6C63FF]" />
              </div>
              <h3 className="text-[#1a1a2e] font-bold text-xl mb-2 group-hover:text-[#6C63FF] transition duration-300">
                {service.title}
              </h3>
              <p className="text-[#4a4a5a] text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.details.map((detail, i) => (
                  <span key={i} className="text-xs bg-gray-100/80 px-3 py-1.5 rounded-full text-[#4a4a5a] font-medium border border-gray-200/50">
                    {detail}
                  </span>
                ))}
              </div>
              <div className="mt-5 w-12 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
