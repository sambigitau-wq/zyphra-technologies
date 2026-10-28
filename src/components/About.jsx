
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Target,
  ShieldCheck,
  Users,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-driven innovation",
    description:
      "We build technology around real needs, creating practical solutions that make everyday work simpler and more effective.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability by design",
    description:
      "We value dependable systems, thoughtful development, and the care required to support technology over time.",
  },
  {
    icon: Users,
    title: "People-first partnership",
    description:
      "We listen, collaborate, and work closely with our clients to turn their challenges into meaningful digital solutions.",
  },
];

const capabilities = [
  "Custom software development",
  "Website design and development",
  "Business process solutions",
  "Digital products and platforms",
];

const team = [
  {
    name: "Priscilla Gitau",
    role: "Computer Scientist",
    image: "/images/priscilla.png",
    bio: "Driving Zyphra's vision to create practical, impactful technology that helps African organizations solve problems and grow.",
  },
  {
    name: "Annlita Wanjiru",
    role: "IT Expert & Customer Support",
    image: "/images/annlita.png",
    bio: "Helping clients get the most from their technology through dependable IT support, client relations, and system optimization.",
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-white pt-28 pb-24 sm:pt-32">
      {/* INTRODUCTION */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#d9d7ff 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles size={15} className="text-[#6C63FF]" />
              Meet Zyphra Technologies
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technology should do more than work.
              <span className="mt-2 block bg-gradient-to-r from-[#6C63FF] to-sky-500 bg-clip-text pb-1 text-transparent">
                It should move you forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Zyphra Technologies is a Kenyan technology company building
              software, websites, and digital solutions that help businesses,
              schools, and organizations work smarter.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              We combine thoughtful design with practical engineering to
              create technology that addresses real challenges. From
              tailor-made business systems to digital products such as
              SchoolAid, our focus is on making technology useful,
              accessible, and impactful.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#5B52E8] px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200/60 transition hover:-translate-y-0.5 hover:bg-[#4940D0]"
            >
              Work with us
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* COMPANY SNAPSHOT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-100/80 via-white to-sky-100/70 blur-xl" />

            <div className="relative rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_-30px_rgba(57,48,130,0.22)] sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
                  <img
                    src="/images/zyphra.png"
                    alt="Zyphra Technologies logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-900">
                    Zyphra Technologies
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Where Technology Takes Flight
                  </p>
                </div>
              </div>

              <div className="mb-6 rounded-2xl bg-[#F7F6FF] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#5B52E8]">
                  <Lightbulb size={17} />
                  Our approach
                </div>
                <p className="text-lg font-semibold leading-7 text-slate-900">
                  Understand the problem. Build the right solution.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Every project starts with understanding the people,
                  processes, and goals behind it.
                </p>
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                What we create
              </p>

              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 transition hover:border-violet-200 hover:bg-violet-50/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-[#6C63FF]">
                      <Code2 size={18} />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {capability}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-28 bg-[#F8F9FD] py-20 sm:mt-36 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6C63FF]">
              What guides us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Good technology starts with the right values.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The way we build matters just as much as what we build.
              These principles guide our work and our relationships with
              every client.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-[#6C63FF] transition group-hover:bg-[#6C63FF] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6C63FF]">
              The people behind the work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Meet the team behind Zyphra.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A dedicated team bringing together technology, problem-solving,
              and client support to turn ideas into practical solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-50 to-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=800&background=f1f0ff&color=5145cd`;
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/15 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#6C63FF]">
                  {member.role}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#11112B] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-violet-500/25 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-36 left-1/3 h-64 w-64 rounded-full bg-sky-500/15 blur-[80px]" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold text-violet-300">
                YOUR NEXT IDEA STARTS HERE
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Let's build something meaningful together.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Tell us what you're working on. Let's explore how the right
                technology can help you move forward.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#4940D0] transition hover:bg-violet-50"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
