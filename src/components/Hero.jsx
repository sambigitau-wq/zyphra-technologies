import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Sparkles,
  PanelsTopLeft,
  Database,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software", description: "Digital tools built around your workflow.", color: "text-indigo-600", bg: "bg-indigo-50" },
  { icon: Globe2, title: "Websites & Web Apps", description: "Modern digital experiences for your brand.", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Database, title: "Business Solutions", description: "Smarter systems for everyday operations.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Layers3, title: "Digital Products", description: "Purpose-built platforms, including SchoolAid.", color: "text-rose-500", bg: "bg-rose-50" },
];

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-violet-100/50 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles size={16} className="text-[#6C63FF]" />
              <span>Technology with purpose. Solutions that work.</span>
            </div>
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.5rem]">
              Turning ideas into
              <span className="mt-2 block bg-gradient-to-r from-[#5B52E8] via-[#6C63FF] to-indigo-400 bg-clip-text text-transparent">digital solutions.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
              At Zyphra Technologies, we design and develop software, websites, and digital products that help businesses, schools, and organizations work smarter and grow with confidence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B52E8] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(91,82,232,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4940D0] hover:shadow-[0_8px_30px_rgb(91,82,232,0.5)]">
                Explore our services
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">Let's build together</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              {["Built around your needs", "Practical technology", "Local support"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50"><CheckCircle2 size={14} className="text-[#6C63FF]" /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-tr from-indigo-200 to-violet-200 opacity-40 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-sm">
                    <img src="/images/zyphra.png" alt="Zyphra Technologies logo" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-base font-bold tracking-tight text-slate-900">Zyphra Technologies</p>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">Where Technology Takes Flight</p>
                  </div>
                </div>
                <span className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:inline-flex">Built for growth</span>
              </div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C63FF]">What we do</p>
                <PanelsTopLeft size={24} className="text-slate-300" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div key={service.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="group rounded-2xl border border-slate-100 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(91,82,232,0.15)]">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} ${service.color} shadow-sm transition-transform duration-300 group-hover:scale-110`}><Icon size={24} /></div>
                      <h3 className="mb-1.5 text-sm font-bold text-slate-900 sm:text-base">{service.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{service.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-indigo-50/50 p-5 border border-indigo-100/50">
                <div>
                  <p className="text-sm font-bold text-slate-900">Have an idea in mind?</p>
                  <p className="mt-1 text-xs text-slate-500">Let's turn it into something real.</p>
                </div>
                <Link to="/contact" aria-label="Discuss your project with Zyphra" className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5B52E8] text-white shadow-md transition-all duration-300 hover:bg-[#4940D0] hover:shadow-lg">
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 -z-10 h-32 w-32 rounded-[2rem] border border-indigo-100 bg-white/60 backdrop-blur-md sm:-left-8" />
            <div className="absolute -right-4 top-20 -z-10 h-20 w-20 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-md sm:-right-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
