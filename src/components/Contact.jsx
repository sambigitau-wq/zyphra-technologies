import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- Added this
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const location = useLocation(); // <-- Added this
  const [status, setStatus] = useState("idle");
  
  // Check if they came from the SchoolAid page
  const isDemoRequest = location.state?.subject === "SchoolAid Demo Request";

  // Optional: Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    const SERVICE_ID = "service_zngu1vl";
    const TEMPLATE_ID = "template_twl104n";
    const PUBLIC_KEY = "thv9WZLmK6RA5UJyL";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <div className="bg-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              {isDemoRequest ? "Request a SchoolAid Demo" : "Let's talk."}
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
              {isDemoRequest 
                ? "Fill out the form and we will reach out to schedule a personalized walkthrough of SchoolAid for your institution."
                : "Have a question about SchoolAid or need custom software for your organization? Send us a message and we will get back to you."}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Mail className="text-slate-700" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:technologieszyphra@gmail.com" className="text-slate-600 hover:text-brand-600 transition-colors">
                    technologieszyphra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Phone className="text-slate-700" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Phone</h3>
                  <a href="tel:+254180559352" className="text-slate-600 hover:text-brand-600 transition-colors">
                    +254 180 559 352
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="text-slate-700" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">Thika, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                    placeholder="you@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {isDemoRequest ? "Tell us about your school" : "Message"}
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    rows="5" 
                    defaultValue={isDemoRequest ? "I would like to schedule a demo of SchoolAid for my school. \n\nSchool Name: \nNumber of Students: \n" : ""}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none" 
                    placeholder={isDemoRequest ? "School Name, Location, Number of Students..." : "How can we help?"} 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : isDemoRequest ? "Request Demo" : "Send Message"}
                  {status !== "loading" && <Send size={18} />}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium justify-center pt-2">
                    <CheckCircle2 size={16} /> Message sent successfully. We'll be in touch.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm font-medium justify-center pt-2">
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;