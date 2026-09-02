import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, CreditCard, Calendar, FileText, Bell, ArrowRight, Star, Zap } from 'lucide-react';

const ShulePro = () => {
  const features = [
    { icon: Users, title: 'Student Management', desc: 'Complete student profiles, admissions, and academic tracking' },
    { icon: CreditCard, title: 'Fee Management', desc: 'Automated fee collection, reminders, and digital receipts' },
    { icon: BookOpen, title: 'Exams & Results', desc: 'Online exams, automated grading, and result publication' },
    { icon: Calendar, title: 'Attendance', desc: 'Real-time attendance tracking with instant alerts' },
    { icon: FileText, title: 'Reports & Analytics', desc: 'Comprehensive reports and data-driven insights' },
    { icon: Bell, title: 'Smart Notifications', desc: 'SMS & email alerts for parents, students, and staff' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy-dark"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purpleBlue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-electric" />
            <span className="text-sm text-gray-300">Flagship Product</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Shule<span className="gradient-text">Pro</span>
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            The complete school management system built for Kenyan schools and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-electric/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric/20 to-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <feature.icon className="w-7 h-7 text-electric" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-electric transition">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.1), rgba(108, 92, 231, 0.1), rgba(0, 212, 255, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric/5 via-purpleBlue/5 to-cyan/5"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your School?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of schools already using ShulePro to streamline their operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">Free Demo</div>
                <div className="text-gray-400 text-sm">Try Before You Buy</div>
              </div>
            </div>
            <button className="btn-primary mx-auto">
              <Zap className="w-4 h-4" />
              Request Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShulePro;
