import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BookOpen, CreditCard, Calendar, FileText, Bell, 
  Star, Zap, CheckCircle, MessageCircle, Cloud, Award,
  TrendingUp, Shield, Layers, Cpu
} from 'lucide-react';

const SchoolAid = () => {
  const features = [
    { icon: Users, title: 'Student Management', desc: 'Complete student profiles, admissions, and academic tracking with advanced analytics', gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
    { icon: CreditCard, title: 'Fee Management', desc: 'Automated fee collection, smart reminders, and digital receipts with real-time tracking', gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
    { icon: BookOpen, title: 'Exams & Results', desc: 'Online exams, automated grading, and instant result publication', gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
    { icon: Calendar, title: 'Attendance Tracking', desc: 'Real-time attendance tracking with instant SMS alerts to parents', gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
    { icon: FileText, title: 'Reports & Analytics', desc: 'Comprehensive reports and data-driven insights for better decision making', gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
    { icon: Bell, title: 'Smart Notifications', desc: 'SMS & email alerts for parents, students, and staff in real-time', gradient: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
    { icon: MessageCircle, title: 'Parent Portal', desc: 'Mobile app for parents to track student progress and communicate with teachers', gradient: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
    { icon: Cloud, title: 'Cloud-Based', desc: 'Access your data anywhere, anytime from any device with enterprise-grade security', gradient: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
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
          <div className="badge-premium mx-auto w-fit mb-6 bg-gradient-to-r from-yellow-50/80 to-yellow-100/80 border-yellow-200">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700">Flagship Product</span>
          </div>
          <h2 className="section-title mb-6">
            School<span className="gradient-text">Aid</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The complete school management system built for Kenyan schools. 
            Empowering education through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="card-premium group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition duration-500`}>
                <feature.icon className="w-7 h-7 text-[#6C63FF]" />
              </div>
              <h3 className="text-[#1a1a2e] font-bold text-lg mb-2 group-hover:text-[#6C63FF] transition duration-300">
                {feature.title}
              </h3>
              <p className="text-[#4a4a5a] text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-16 text-center bg-gradient-to-br from-white via-white to-gray-50/50 border border-gray-200/80 shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <div className="text-6xl mb-6">🎓</div>
            <h3 className="text-4xl font-bold text-[#1a1a2e] mb-4">
              Ready to Transform Your School?
            </h3>
            <p className="text-[#4a4a5a] mb-10 max-w-2xl mx-auto text-lg">
              Join hundreds of schools already using SchoolAid to streamline operations 
              and deliver better educational outcomes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="card-premium border border-yellow-200 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                <div className="text-4xl font-bold text-yellow-600">100%</div>
                <div className="text-[#4a4a5a] text-sm font-medium">Satisfaction Rate</div>
              </div>
              <div className="card-premium border border-[#6C63FF]/20 bg-gradient-to-br from-[#6C63FF]/5 to-[#4A47E0]/5">
                <div className="text-4xl font-bold text-[#6C63FF]">24/7</div>
                <div className="text-[#4a4a5a] text-sm font-medium">Support Available</div>
              </div>
              <div className="card-premium border border-green-200 bg-gradient-to-br from-green-50/50 to-green-100/30">
                <div className="text-4xl font-bold text-green-600">Free Demo</div>
                <div className="text-[#4a4a5a] text-sm font-medium">Try Before You Buy</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Zap className="w-5 h-5" />
                Request Free Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolAid;
