import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="badge-premium mx-auto w-fit mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Reach out and let's make it happen together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#1a1a2e]">
                Let's Talk <span className="gradient-text">Tech</span>
              </h3>
              <p className="text-[#4a4a5a] text-lg leading-relaxed">
                We're here to help you transform your organization with technology. 
                Every great project starts with a conversation.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'technologieszyphra@gmail.com', color: 'text-[#6C63FF]', bg: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
                { icon: Phone, label: 'Phone', value: '+254 180 559 352', color: 'text-[#FF6B6B]', bg: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
                { icon: MapPin, label: 'Location', value: 'Thika, Kenya', color: 'text-[#4A47E0]', bg: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
                { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM', color: 'text-[#FFD700]', bg: 'from-[#FFD700]/10 to-[#FFA500]/10' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`card-premium bg-gradient-to-br ${item.bg} border-0 p-6`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-[#4a4a5a] text-sm font-medium">{item.label}</div>
                      <div className="text-[#1a1a2e] font-semibold">{item.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-premium border border-[#6C63FF]/10 hover:border-[#6C63FF]/30 shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a2e] focus:border-[#6C63FF] outline-none transition-all duration-300 hover:bg-white focus:bg-white"
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a2e] focus:border-[#6C63FF] outline-none transition-all duration-300 hover:bg-white focus:bg-white"
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a2e] focus:border-[#6C63FF] outline-none transition-all duration-300 hover:bg-white focus:bg-white"
                    placeholder="How can we help you?" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a2e] focus:border-[#6C63FF] outline-none transition-all duration-300 hover:bg-white focus:bg-white resize-none"
                    placeholder="Tell us about your project..." 
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary justify-center text-lg py-4"
                >
                  <Zap className="w-5 h-5" />
                  {formStatus === 'success' ? (
                    <>Message Sent! <CheckCircle className="w-5 h-5" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </motion.button>
                
                {formStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 font-medium"
                  >
                    ✅ Thank you! We'll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
