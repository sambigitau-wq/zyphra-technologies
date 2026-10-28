
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, LayoutDashboard, BookOpen, Users, CreditCard,
  Bell, CheckCircle2, ChevronLeft, GraduationCap, CalendarDays,
  FileText, BarChart2, Clock, Search, Brain, TrendingUp, Shield,
  BookMarked, Bus, Hotel, Library, Award, UserCheck, MessageSquare,
  ClipboardCheck, Wallet, Briefcase, Fingerprint, KeyRound,
} from "lucide-react";

const DEMO_URL = "https://schoolaid.zyphra.co.ke/";
const DEMO_EMAIL = "andykim@gmail.com";
const DEMO_PASSWORD = "12345678";

const PURPLE = "#6C63FF";
const DEEP_PURPLE = "#4A47E0";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

const DEMO_STATS = [
  { icon: Users, label: "STUDENTS", val: "248", sub: "+12 new this month", trend: "+5%" },
  { icon: Users, label: "STAFF", val: "18", sub: "14 teaching", trend: "+2%" },
  { icon: CreditCard, label: "FEES COLLECTED", val: "Ksh 1.8M", sub: "72% collection rate", trend: "+9%" },
  { icon: FileText, label: "OUTSTANDING", val: "Ksh 695K", sub: "42 students owing", trend: "-3%" },
  { icon: CalendarDays, label: "ATTENDANCE TODAY", val: "94%", sub: "232 marked", trend: "+1%" },
  { icon: BookOpen, label: "CLASSES", val: "8", sub: "6 active today", trend: "0%" },
];

const DEMO_FEE_TREND = [
  { month: "May", value: 62 },
  { month: "Jun", value: 71 },
  { month: "Jul", value: 58 },
  { month: "Aug", value: 80 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 74 },
];

const DEMO_ENROLLMENT = [
  { name: "Grade 1", count: 32 },
  { name: "Grade 2", count: 28 },
  { name: "Grade 3", count: 30 },
  { name: "Grade 4", count: 27 },
  { name: "Grade 5", count: 34 },
  { name: "Grade 6", count: 31 },
];

const DEMO_ATTENDANCE_TREND = [
  88, 92, 90, 94, 91, 89, 93, 95, 92, 94, 96, 93, 91, 94,
];

const features = [
  { icon: Users, title: "Students & Admissions", desc: "Full lifecycle, multi-guardian support, photo uploads." },
  { icon: ClipboardCheck, title: "Exams & Results", desc: "Automated grading, bulk marks entry, exam cards." },
  { icon: CalendarDays, title: "Attendance", desc: "Daily marking, staff clock-in, Sick Bay integration." },
  { icon: Wallet, title: "Fees & Accounting", desc: "Fee setup, discounts, receipts, expenses, transfers." },
  { icon: Briefcase, title: "HR & Payroll", desc: "Staff profiles, attendance, automated payroll." },
  { icon: Library, title: "Library", desc: "Borrow, return, overdue tracking, fines." },
  { icon: Bus, title: "Transport", desc: "Routes, vehicles, drivers, student allocation." },
  { icon: Hotel, title: "Hostel & Sick Bay", desc: "Boarding, room allocation, health records." },
  { icon: BookMarked, title: "Homework & Online Exams", desc: "Auto-graded MCQs, file uploads, submissions." },
  { icon: Award, title: "Certificates & ID Cards", desc: "Custom-designed, printable, branded." },
  { icon: Fingerprint, title: "Roles & Permissions", desc: "Granular control over every module for every staff member." },
  { icon: TrendingUp, title: "Reports & Analytics", desc: "Fee, academic, attendance and financial reports." },
];

const portals = [
  { icon: GraduationCap, title: "Admins", desc: "Full control over every module, user and setting." },
  { icon: BookOpen, title: "Teachers", desc: "Manage classes, results, attendance and homework." },
  { icon: Users, title: "Parents", desc: "Track their child's fees, grades and attendance." },
  { icon: Shield, title: "Students", desc: "Access results, fee statements, exam cards and more." },
];

const aptitudeScores = [
  { stream: "STEM", score: 88, top: true },
  { stream: "Languages", score: 74, top: true },
  { stream: "Social", score: 62 },
  { stream: "Business", score: 58 },
  { stream: "Arts", score: 45 },
  { stream: "Applied", score: 41 },
];

const arrivals = [
  { name: "Mary Achieng", adm: "1045", time: "07:42", status: "PRESENT" },
  { name: "Brian Otieno", adm: "1082", time: "08:11", status: "LATE" },
  { name: "Faith Wambui", adm: "1103", time: "07:38", status: "PRESENT" },
  { name: "Jessica Mutai", adm: "1120", time: "—", status: "ABSENT" },
];

const balances = [
  { name: "Brian Otieno", adm: "1082", amt: "Ksh 22,500" },
  { name: "Jessica Mutai", adm: "1120", amt: "Ksh 18,000" },
  { name: "Grace Njeri", adm: "1055", amt: "Ksh 15,200" },
  { name: "Sam Kiptoo", adm: "1098", amt: "Ksh 12,000" },
];

const navGroups = [
  {
    label: "School",
    items: [
      { icon: BookOpen, label: "Classes" },
      { icon: FileText, label: "Subjects" },
      { icon: Users, label: "Students" },
      { icon: Users, label: "Staff" },
    ],
  },
  {
    label: "Academics",
    items: [
      { icon: FileText, label: "Exams" },
      { icon: BarChart2, label: "Results" },
      { icon: Clock, label: "Timetable" },
      { icon: CalendarDays, label: "Schemes of Work" },
    ],
  },
];

const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#6C63FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A47E0] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md";

const eyebrowClass =
  "mb-5 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-2 text-xs font-bold text-[#4A47E0]";

const SectionHeading = ({ eyebrow, title, description, centered = false }) => (
  <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
    {eyebrow && <div className={eyebrowClass}>{eyebrow}</div>}
    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.7rem]">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

const DemoAccessCard = () => (
  <div className={`${cardClass} max-w-xl overflow-hidden`}>
    <div className="h-1.5 bg-gradient-to-r from-[#6C63FF] via-[#8B7CFF] to-[#4A47E0]" />
    <div className="p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-[#4A47E0]">
          <KeyRound size={20} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6C63FF]">
            Try it right now
          </p>
          <h3 className="mt-1 font-bold text-slate-900">Live demo account</h3>
        </div>
      </div>

      <div className="space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
        {[
          ["URL", DEMO_URL],
          ["Email", DEMO_EMAIL],
          ["Password", DEMO_PASSWORD],
        ].map(([label, value]) => (
          <div key={label} className="grid grid-cols-[72px_minmax(0,1fr)] gap-2">
            <span className="text-xs font-bold text-slate-400">{label}</span>
            {label === "URL" ? (
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all font-medium text-[#4A47E0] underline decoration-violet-200 underline-offset-4 hover:decoration-[#4A47E0]"
              >
                {value}
              </a>
            ) : (
              <span className="break-all font-mono font-medium text-slate-800">
                {value}
              </span>
            )}
          </div>
        ))}
      </div>

      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonPrimary} mt-5 w-full sm:w-auto`}
      >
        Open Live Demo <ArrowRight size={17} />
      </a>
      <p className="mt-3 text-xs leading-5 text-slate-400">
        Demo account — explore the available modules.
      </p>
    </div>
  </div>
);

const CheckList = ({ items }) => (
  <ul className="mb-8 space-y-3.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#6C63FF]" />
        <span className="text-sm leading-6 text-slate-600">{item}</span>
      </li>
    ))}
  </ul>
);

const MiniCardHeading = ({ icon: Icon, children }) => (
  <div className="mb-5 flex items-center gap-2.5">
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-[#6C63FF]">
      <Icon size={16} />
    </span>
    <h3 className="text-sm font-bold text-slate-800">{children}</h3>
  </div>
);

const DashboardStat = ({ stat }) => {
  const Icon = stat.icon;
  const isNegative = stat.trend.startsWith("-");
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-[#6C63FF]">
          <Icon size={17} />
        </span>
        <span className={`rounded-md px-2 py-1 text-[10px] font-bold ${isNegative ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-700"}`}>
          {isNegative ? "↓" : "↑"} {stat.trend.replace("-", "").replace("+", "")}
        </span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {stat.label}
      </p>
      <p className="mt-2 text-xl font-extrabold leading-none tracking-tight text-slate-900">
        {stat.val}
      </p>
      <p className="mt-2 text-[10px] leading-4 text-slate-400">{stat.sub}</p>
    </div>
  );
};

const DashboardSidebar = () => (
  <aside className="flex w-full shrink-0 flex-col bg-[#211B48] text-white md:w-56 lg:w-60">
    <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8C83FF] to-[#6C63FF] shadow-lg shadow-black/20">
          <GraduationCap size={21} />
        </div>
        <span className="text-lg font-extrabold tracking-tight">SchoolAid</span>
      </div>
      <ChevronLeft size={17} className="text-violet-200/60" />
    </div>

    <div className="flex items-center gap-3 border-b border-white/10 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 to-[#6C63FF] text-sm font-extrabold text-white">
        AK
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold">Andrew Kimani</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-violet-200/70">
          SCHOOL_ADMIN
        </p>
      </div>
    </div>

    <div className="flex-1 space-y-6 px-3 py-5">
      <div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-violet-200/50">
          Main
        </p>
        <div className="flex items-center gap-3 rounded-xl bg-[#6C63FF] px-3 py-3 text-sm font-semibold shadow-lg shadow-black/10">
          <LayoutDashboard size={17} /> Dashboard
        </div>
      </div>

      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-violet-200/50">
            {group.label}
          </p>
          <div className="space-y-1">
            {group.items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-violet-100/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon size={16} className="text-violet-200/70" />
                {label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-white/10 p-4">
      <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-violet-100/70">
        <ArrowRight size={16} className="rotate-180" /> Logout
      </div>
    </div>
  </aside>
);

const DashboardCharts = () => {
  const maxEnrollment = Math.max(...DEMO_ENROLLMENT.map((item) => item.count));
  const maxFee = Math.max(...DEMO_FEE_TREND.map((item) => item.value));

  return (
    <div className="mb-5 grid gap-4 lg:grid-cols-3">
      <div className={`${cardClass} p-5`}>
        <MiniCardHeading icon={BarChart2}>Fee Collection (Last 6 Months)</MiniCardHeading>
        <div className="flex h-32 items-end gap-2 border-b border-slate-100 pb-2">
          {DEMO_FEE_TREND.map((item) => (
            <div key={item.month} className="flex h-full flex-1 flex-col justify-end">
              <div
                title={`${item.month}: ${item.value}%`}
                className="w-full rounded-t-md bg-gradient-to-t from-[#4A47E0] to-[#8E86FF] transition-all duration-500 hover:from-[#342FBA] hover:to-[#6C63FF]"
                style={{ height: `${(item.value / maxFee) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-slate-400">
          {DEMO_FEE_TREND.map((item) => <span key={item.month}>{item.month}</span>)}
        </div>
        <p className="mt-4 text-center text-xs font-bold text-slate-700">
          Total: Ksh 1,840,000
        </p>
      </div>

      <div className={`${cardClass} p-5`}>
        <MiniCardHeading icon={Users}>Enrollment by Class</MiniCardHeading>
        <div className="space-y-3">
          {DEMO_ENROLLMENT.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] font-medium text-slate-500">
                {item.name}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#A49DFF]"
                  style={{ width: `${(item.count / maxEnrollment) * 100}%` }}
                />
              </div>
              <span className="w-6 text-right text-[10px] font-bold text-slate-700">
                {item.count}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-bold text-slate-700">
          Total: 182 students
        </p>
      </div>

      <div className={`${cardClass} p-5`}>
        <MiniCardHeading icon={TrendingUp}>Attendance Trend (14 Days)</MiniCardHeading>
        <div className="h-32">
          <svg
            className="h-full w-full overflow-visible"
            viewBox="0 0 100 22"
            preserveAspectRatio="none"
            role="img"
            aria-label="Attendance trend over 14 days"
          >
            {[5, 10, 15, 20].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="#EDE9FE"
                strokeWidth="0.3"
              />
            ))}
            <polyline
              points={DEMO_ATTENDANCE_TREND.map((value, index) => {
                const x = (index / (DEMO_ATTENDANCE_TREND.length - 1)) * 100;
                const y = 21 - (value / 100) * 19;
                return `${x},${y}`;
              }).join(" ")}
              fill="none"
              stroke={PURPLE}
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-slate-400">
          <span>15</span><span>18</span><span>21</span><span>24</span><span>27</span>
        </div>
        <p className="mt-4 text-center text-xs font-bold text-slate-700">
          Average: 92.3%
        </p>
      </div>
    </div>
  );
};

const DashboardBottom = () => (
  <div className="grid gap-4 md:grid-cols-3">
    <div className={`${cardClass} p-4`}>
      <MiniCardHeading icon={Bell}>Alerts & Action Items</MiniCardHeading>
      <ul className="space-y-3 text-[11px] leading-5 text-slate-600">
        {[
          <><strong className="text-slate-800">12</strong> students have pending fee reminders</>,
          <><strong className="text-slate-800">3</strong> library books are overdue</>,
          <><strong className="text-slate-800">2</strong> staff attendance requests waiting</>,
          <>Term 2 closing report due in 5 days</>,
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C63FF]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={`${cardClass} p-4`}>
      <MiniCardHeading icon={FileText}>Top Outstanding Balances</MiniCardHeading>
      <ul className="space-y-3">
        {balances.map((student) => (
          <li key={student.adm} className="flex items-center justify-between gap-2 text-[11px]">
            <div className="min-w-0">
              <p className="truncate font-semibold text-slate-800">{student.name}</p>
              <p className="text-[10px] text-slate-400">Adm {student.adm}</p>
            </div>
            <span className="shrink-0 font-bold text-slate-800">{student.amt}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={`${cardClass} p-4`}>
      <MiniCardHeading icon={Users}>Student Demographics</MiniCardHeading>
      {[
        { label: "Boys", count: 126, width: "51%", color: "bg-[#6C63FF]" },
        { label: "Girls", count: 122, width: "49%", color: "bg-[#B6AEFF]" },
      ].map((group) => (
        <div key={group.label} className="mb-4">
          <div className="mb-2 flex justify-between text-[11px]">
            <span className="text-slate-600">{group.label}</span>
            <span className="font-bold text-slate-800">{group.count}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${group.color}`} style={{ width: group.width }} />
          </div>
        </div>
      ))}
      <div className="flex justify-between border-t border-slate-100 pt-3 text-[11px]">
        <span className="text-slate-500">Total active</span>
        <span className="font-bold text-slate-900">248</span>
      </div>
    </div>
  </div>
);

const DashboardPreview = () => (
  <motion.div {...reveal} className="overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl shadow-violet-200/40 lg:rounded-3xl">
    <div className="flex flex-col md:flex-row">
      <DashboardSidebar />

      <div className="min-w-0 flex-1 bg-[#F8F8FF]">
        <header className="flex min-h-16 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-extrabold text-[#4A47E0]">
              J
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-xs font-extrabold tracking-wide text-slate-900 sm:text-sm">
                JITAHIDI JUNIOR SCHOOL
              </h3>
              <p className="mt-1 truncate text-[10px] text-slate-400">
                ECDCE_PRIMARY_JSS
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="relative hidden xl:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                aria-label="Search dashboard"
                placeholder="Search..."
                className="h-9 w-48 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-[#6C63FF]">
              <Bell size={17} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6">
          <div className="relative mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#4A47E0] via-[#6259EE] to-[#8B83FF] p-5 text-white shadow-lg shadow-violet-200/50 sm:p-6">
            <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-white/5" />
            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100">
                School overview
              </p>
              <h3 className="text-lg font-extrabold sm:text-xl">
                JITAHIDI JUNIOR SCHOOL Dashboard
              </h3>
              <p className="mt-2 text-sm text-white/80">Welcome back, Andrew Kimani!</p>
              <p className="mt-1 text-xs text-white/65">Primary School Dashboard</p>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-3 2xl:grid-cols-6">
            {DEMO_STATS.map((stat) => <DashboardStat key={stat.label} stat={stat} />)}
          </div>

          <DashboardCharts />
          <DashboardBottom />
        </div>
      </div>
    </div>
  </motion.div>
);

const AptitudePreview = () => (
  <div className={`${cardClass} p-5 sm:p-7`}>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-[#6C63FF]">
          <Brain size={18} />
        </span>
        <h3 className="text-sm font-extrabold text-slate-800">KNEC Aptitude Analysis</h3>
      </div>
      <span className="rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-[#4A47E0]">
        Jane W. · Adm 1045
      </span>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {aptitudeScores.map((score) => (
        <div
          key={score.stream}
          className={`rounded-xl border p-4 text-center transition-all hover:-translate-y-0.5 ${
            score.top
              ? "border-violet-200 bg-violet-50/70 shadow-sm"
              : "border-slate-100 bg-white"
          }`}
        >
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wide text-slate-500">
            {score.stream}
          </p>
          <p className={`text-2xl font-extrabold ${score.top ? "text-[#4A47E0]" : "text-slate-600"}`}>
            {score.score}%
          </p>
          {score.top && <p className="mt-2 text-[9px] font-bold text-[#6C63FF]">★ Likely to thrive</p>}
        </div>
      ))}
    </div>

    <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50/70 p-4">
      <p className="text-xs leading-6 text-slate-700">
        <strong className="text-[#4A47E0]">Recommendation:</strong> This student shows strongest potential in{" "}
        <strong>STEM</strong> and <strong>Languages</strong>. Consider encouraging further development in these areas.
      </p>
    </div>
  </div>
);

const ArrivalPreview = () => (
  <div className={`${cardClass} p-5 sm:p-6`}>
    <div className="mb-5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-[#6C63FF]">
          <UserCheck size={18} />
        </span>
        <h3 className="text-sm font-extrabold text-slate-800">Today's Arrivals</h3>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
      </span>
    </div>

    <div className="space-y-3">
      {arrivals.map((student) => (
        <div key={student.adm} className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-3 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-extrabold text-[#4A47E0]">
            {student.name.split(" ").map((part) => part[0]).join("")}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-slate-800 sm:text-sm">{student.name}</p>
            <p className="mt-1 text-[10px] text-slate-400">Adm {student.adm}</p>
          </div>
          <span className="hidden font-mono text-xs text-slate-500 sm:block">{student.time}</span>
          <span className={`shrink-0 rounded-md px-2 py-1 text-[9px] font-extrabold ${
            student.status === "PRESENT"
              ? "bg-emerald-50 text-emerald-700"
              : student.status === "LATE"
              ? "bg-amber-50 text-amber-700"
              : "bg-slate-100 text-slate-500"
          }`}>
            {student.status}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-violet-100 bg-violet-50/70 p-4">
      <MessageSquare size={16} className="mt-0.5 shrink-0 text-[#6C63FF]" />
      <p className="text-xs leading-5 text-slate-600">
        <strong className="text-[#4A47E0]">SMS sent</strong> to the parents of all 3 checked-in students at the exact moment of arrival.
      </p>
    </div>
  </div>
);

const SchoolAid = () => (
  <main className="min-h-screen overflow-hidden bg-white text-slate-900">
    {/* HERO */}
    <section className="relative isolate overflow-hidden border-b border-violet-100 bg-gradient-to-b from-violet-50/80 via-white to-white pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute -right-32 -top-20 -z-10 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, staggerChildren: 0.12 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold text-[#4A47E0] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
            Zyphra Technologies · Our Flagship Product
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Make Your school 
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#4A47E0] bg-clip-text text-transparent">
              Smarter with SchoolAid.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Take a look inside SchoolAid, the school management platform that helps administrators, teachers and parents stay connected through organised records and real-time information.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              state={{ subject: "SchoolAid Demo Request" }}
              className={buttonPrimary}
            >
              Request a Demo <ArrowRight size={18} />
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-bold text-[#4A47E0] shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50"
            >
              Explore Live Demo <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
            {["Student management", "Fees & finance", "Academic reporting"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#6C63FF]" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* DASHBOARD PREVIEW */}
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className={eyebrowClass}>
            <LayoutDashboard size={14} /> Inside SchoolAid
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Your school's operations, at a glance.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore a preview of the dashboard, from fee collection and student records to attendance and school performance.
          </p>
        </div>
        <DashboardPreview />
        <p className="mt-4 text-center text-xs text-slate-400">
          Illustrative dashboard preview using sample school data.
        </p>
      </div>
    </section>

    {/* KNEC APTITUDE */}
    <section className="border-y border-violet-100 bg-[#FAF9FF] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div {...reveal}>
          <SectionHeading
            eyebrow={<><Brain size={14} /> KNEC Aptitude Evaluation</>}
            title={<>Discover every student's <span className="text-[#6C63FF]">true potential.</span></>}
            description={<>Grades alone don't tell the full story. SchoolAid analyses a student's performance across subjects and groups results into KNEC subject streams — STEM, Languages, Social Sciences, Arts, Business and Applied Sciences.</>}
          />
          <div className="mt-6">
            <CheckList items={[
              "Automatic stream classification of every subject result",
              "Visual stream averages — instantly see where a student thrives",
              "Data-driven recommendations for future academic or career paths",
              "Identifies strengths a single grade would otherwise hide",
            ]} />
          </div>
          <DemoAccessCard />
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.12 }}>
          <AptitudePreview />
        </motion.div>
      </div>
    </section>

    {/* STUDENT ARRIVAL AND DEPARTURE */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div {...reveal} className="order-2 lg:order-1">
          <ArrivalPreview />
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.12 }} className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={<><UserCheck size={14} /> Student Arrival & Departure</>}
            title={<>Every arrival matters. <span className="text-[#6C63FF]">Every parent deserves peace of mind.</span></>}
            description="A dedicated module provides parents with reassurance and gives schools a clear, timestamped record of student movement. Check-ins and check-outs can trigger SMS notifications to parents or guardians."
          />
          <div className="mt-6">
            <CheckList items={[
              "One-click check-in — mark a student PRESENT, LATE or EXCUSED",
              "Automatic SMS to parents when a child arrives or departs",
              "Live dashboard showing arrivals, absences and latecomers",
              "Full student history filtered by date range",
              "Works alongside attendance for a complete safety trail",
            ]} />
          </div>
          <DemoAccessCard />
        </motion.div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="border-y border-violet-100 bg-[#FAF9FF] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="mb-12">
          <SectionHeading
            centered
            eyebrow="One connected platform"
            title={<>Everything your school needs. <span className="text-[#6C63FF]">All in one place.</span></>}
            description="From admissions to alumni, SchoolAid helps replace scattered spreadsheets, WhatsApp groups and paper trails with a connected school management system."
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: (index % 4) * 0.04, duration: 0.4 }}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/70"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-[#6C63FF] transition-all duration-300 group-hover:bg-[#6C63FF] group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-extrabold text-slate-800">{feature.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{feature.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>

    {/* STAKEHOLDER PORTALS */}
    <section className="relative isolate overflow-hidden bg-[#211B48] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-[#6C63FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold text-violet-200">
            <Shield size={14} /> Access built around roles
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            One platform.
            <span className="text-[#A49DFF]"> Every stakeholder.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-violet-100/70 sm:text-base">
            Role-based access helps everyone see the information and tools they need, with permissions suited to their responsibilities.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors hover:border-violet-300/40 hover:bg-white/[0.1]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6C63FF]/20 text-[#B8B2FF]">
                  <Icon size={22} />
                </div>
                <h3 className="font-extrabold text-white">{portal.title}</h3>
                <p className="mt-2 text-xs leading-6 text-violet-100/65">{portal.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A47E0] via-[#6259EE] to-[#8178FF] px-6 py-12 text-center text-white shadow-2xl shadow-violet-200/60 sm:px-12 sm:py-16"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-white/5" />

        <div className="relative z-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
            <GraduationCap size={29} />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Ready to simplify your school?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Explore the live SchoolAid demo and see how connected school management can work for your institution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-[#4A47E0] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Try Live Demo <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              state={{ subject: "SchoolAid Demo Request" }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20"
            >
              Talk to Zyphra <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-5 break-all text-xs text-white/70">
            Demo login: {DEMO_EMAIL} / {DEMO_PASSWORD}
          </p>
        </div>
      </motion.div>
    </section>
  </main>
);

export default SchoolAid;
