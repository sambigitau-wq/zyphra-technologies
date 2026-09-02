import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Code, Zap, TrendingUp, Mail, Rocket, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Priscilla Gitau',
      role: 'Computer Scientist',
      description: 'Visionary leader with a passion for using technology to solve Africa\'s most pressing challenges. Expert in AI research and full-stack development.',
      icon: '👩‍💻',
      achievements: ['AI Research', 'Full Stack Dev', 'Tech Innovation'],
      email: 'priscilla@zyphra.co.ke',
      gradient: 'from-[#6C63FF]/20 to-[#4A47E0]/20'
    },
    {
      name: 'Annlita Wanjiru',
      role: 'IT Expert & Customer Support',
      description: 'Dedicated professional ensuring seamless operations and exceptional client experiences. Specialist in system optimization and client relations.',
      icon: '👩‍💼',
      achievements: ['IT Support', 'Client Relations', 'System Optimization'],
      email: 'annlita@zyphra.co.ke',
      gradient: 'from-[#FF6B6B]/20 to-[#FF4757]/20'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="badge-premium mx-auto w-fit mb-6">
            <Users className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <h2 className="section-title mb-6">
            Where Technology <span className="gradient-text">Takes Flight</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We're on a mission to transform African organizations through innovative, 
            accessible, and impactful technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-[#1a1a2e]">
                Engineering <span className="gradient-text">Tomorrow</span>
              </h3>
              <p className="text-[#4a4a5a] leading-relaxed text-lg">
                Zyphra Technologies is a Kenyan tech company building innovative software solutions 
                for schools, hospitals, and businesses across Africa. We believe technology has the 
                power to transform lives.
              </p>
              <p className="text-[#4a4a5a] leading-relaxed">
                Our mission is to create solutions that are accessible, affordable, and impactful 
                for African communities. We're not just building software — we're building the future.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: 'Excellence', color: 'text-[#6C63FF]', bg: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
                { icon: Users, label: 'Community', color: 'text-[#FF6B6B]', bg: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
                { icon: Target, label: 'Impact', color: 'text-[#4A47E0]', bg: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
                { icon: Heart, label: 'Passion', color: 'text-[#FF4757]', bg: 'from-[#FF4757]/10 to-[#FF6B6B]/10' },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className={`card-premium text-center bg-gradient-to-br ${item.bg} border-0`}
                >
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                  <div className="text-[#1a1a2e] font-semibold">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-premium border border-[#6C63FF]/10 hover:border-[#6C63FF]/30"
          >
            <div className="text-center space-y-6">
              <div className="text-8xl mb-2">🚀</div>
              <h4 className="text-3xl font-bold text-[#1a1a2e]">Our Mission</h4>
              <p className="text-[#4a4a5a] text-lg leading-relaxed max-w-md mx-auto">
                To transform African organizations through innovative, accessible, and 
                impactful technology solutions.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent"></div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                <span className="text-[#6C63FF] text-sm flex items-center gap-2 font-medium">
                  <Code className="w-4 h-4" /> Built in Kenya
                </span>
                <span className="text-[#4A47E0] text-sm flex items-center gap-2 font-medium">
                  <Zap className="w-4 h-4" /> Fast & Reliable
                </span>
                <span className="text-[#FF6B6B] text-sm flex items-center gap-2 font-medium">
                  <TrendingUp className="w-4 h-4" /> Growing
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-[#1a1a2e]">
              Meet Our <span className="gradient-text">Team</span>
            </h3>
            <p className="text-[#4a4a5a] mt-3">The brilliant minds behind Zyphra Technologies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-premium group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className={`w-36 h-36 rounded-full bg-gradient-to-br ${member.gradient} border-4 border-[#6C63FF]/20 flex items-center justify-center text-7xl mb-5 group-hover:scale-110 transition duration-500`}>
                      {member.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a1a2e] group-hover:text-[#6C63FF] transition duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#6C63FF] font-medium text-sm mt-1">{member.role}</p>
                  <p className="text-[#4a4a5a] mt-4 text-sm leading-relaxed max-w-sm">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {member.achievements.map((achievement, i) => (
                      <span key={i} className="bg-gradient-to-r from-[#6C63FF]/10 to-[#4A47E0]/10 px-3 py-1.5 rounded-full text-xs text-[#6C63FF] font-medium border border-[#6C63FF]/10">
                        {achievement}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-5 flex items-center gap-2 text-[#4a4a5a] text-sm bg-gray-50 px-4 py-2 rounded-full">
                    <Mail className="w-4 h-4 text-[#6C63FF]" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '50+', label: 'Projects Delivered', icon: Rocket, color: 'text-[#6C63FF]', bg: 'from-[#6C63FF]/10 to-[#4A47E0]/10' },
            { number: '100%', label: 'Client Satisfaction', icon: Award, color: 'text-[#FF6B6B]', bg: 'from-[#FF6B6B]/10 to-[#FF4757]/10' },
            { number: '24/7', label: 'Support Available', icon: Globe, color: 'text-[#4A47E0]', bg: 'from-[#4A47E0]/10 to-[#6C63FF]/10' },
            { number: '⭐', label: '5-Star Rating', icon: Lightbulb, color: 'text-[#FFD700]', bg: 'from-[#FFD700]/10 to-[#FFA500]/10' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }}
              className={`card-premium text-center bg-gradient-to-br ${stat.bg} border-0`}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="text-[#4a4a5a] text-sm mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
