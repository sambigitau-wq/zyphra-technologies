import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Smartphone,
  GraduationCap,
  Cloud,
  ShieldCheck,
  BarChart3,
  Headphones,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Purpose-built applications designed around your workflows, business needs, and long-term goals.",
    category: "ENGINEERING",
  },
  {
    icon: Globe2,
    title: "Websites & Web Apps",
    description:
      "Professional websites and responsive web applications that strengthen your brand and connect you with customers.",
    category: "DIGITAL EXPERIENCES",
  },
  {
    icon: BarChart3,
    title: "Business Solutions",
    description:
      "Smart digital systems that simplify operations, organize information, and support better decisions.",
    category: "BUSINESS TECHNOLOGY",
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    description:
      "Digital tools that help educational institutions manage daily operations and serve their communities more effectively.",
    category: "OUR PRODUCTS",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences that make your services more accessible and convenient for the people who use them.",
    category: "MOBILE",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Deployment, hosting guidance, and infrastructure solutions to help your applications stay accessible and dependable.",
    category: "INFRASTRUCTURE",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "Practical security-conscious development and system improvements to help protect your applications and data.",
    category: "PROTECTION",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Ongoing technical assistance, troubleshooting, and updates to keep your systems working as intended.",
    category: "ONGOING SUPPORT",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50/50 pt-28 pb-24 sm:pt-32">
      {/* ================= HERO ================= */}
      <section className="relative isolate">
        {/* Background Grid & Glows */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-10 -z-10 h-[400px] w-[400px] rounded-full bg-violet-100/50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles size={15} className="text-[#6C63FF]" />
              Technology built around you
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              The right technology.
              <span className="mt-2 block bg-gradient-to-r from-[#5B52E8] via-[#6C63FF] to-sky-500 bg-clip-text pb-1 text-transparent">
                For what comes next.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From custom software and websites to digital products and
              business systems, Zyphra Technologies turns real-world
              challenges into practical digital solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B52E8] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(91,82,232,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4940D0] hover:shadow-[0_8px_30px_rgb(91,82,232,0.5)]"
              >
                Discuss your project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
              >
                Explore our capabilities
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              {[
                "Practical solutions",
                "Thoughtful engineering",
                "Client-focused support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50">
                    <CheckCircle2 size={14} className="text-[#6C63FF]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section id="our-services" className="relative mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
              What we do
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Our capabilities
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-slate-500">
            Every organization is different. We help you find and build
            technology that fits your specific requirements — no fluff, just
            what works.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                }}
                className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(91,82,232,0.15)] ${
                  service.featured
                    ? "border-[#6C63FF]/30 bg-gradient-to-br from-[#F8F7FF] to-white"
                    : "border-slate-200/80 bg-white hover:border-[#6C63FF]/30"
                }`}
              >
                {service.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-indigo-100 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5B52E8] shadow-sm">
                    Featured
                  </span>
                )}

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${
                    service.featured
                      ? "bg-[#5B52E8] text-white shadow-[0_8px_20px_rgb(91,82,232,0.3)]"
                      : "bg-indigo-50 text-[#6C63FF] group-hover:bg-[#5B52E8] group-hover:text-white"
                  }`}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-slate-400">
                  {service.category}
                </p>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#5B52E8] transition-colors">
                  {service.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  {service.featured ? (
                    <Link
                      to="/schoolaid"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5B52E8] transition hover:gap-2 hover:text-[#4940D0]"
                    >
                      Discover SchoolAid
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Zyphra Technologies
                    </span>
                  )}
                  {!service.featured && (
                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6C63FF]"
                    />
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-slate-200/60 bg-white p-8 shadow-sm sm:p-12 lg:p-16"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            
            {/* Left Text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
                Our approach
              </p>
              <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl">
                Built around your goals, not just the technology.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                We begin by understanding your challenge, identify a suitable
                approach, and work with you to develop a solution that serves
                a clear purpose.
              </p>
            </div>

            {/* Right Steps */}
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "We listen to your needs and define the problem.",
                },
                {
                  number: "02",
                  title: "Create",
                  text: "We design and build around your requirements.",
                },
                {
                  number: "03",
                  title: "Support",
                  text: "We help keep your solution useful over time.",
                },
              ].map((step, i) => (
                <div key={step.number} className="relative">
                  {/* Connector Line (Desktop only) */}
                  {i !== 2 && (
                    <div className="absolute left-1/2 top-6 hidden h-px w-full bg-slate-200 sm:block" />
                  )}
                  
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-100 bg-white text-sm font-bold text-[#6C63FF] shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-[#11112B] px-6 py-16 text-center sm:px-12 sm:py-24 shadow-2xl"
        >
          {/* Background Glows */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Have a project in mind?
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Let's turn your idea into something real.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              Tell us what you want to achieve. We'll work with you to explore
              a practical technology solution for your needs.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#4940D0] transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50 hover:shadow-lg"
            >
              Let's talk
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;