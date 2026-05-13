import { useState } from "react";

const modules = [
  {
    id: "01",
    tag: "Foundation",
    title: "Introduction to SOC",
    topics: [
      "Introduction to SOC Analyst: Roles and Responsibilities",
      "Functions of a Security Operations Centre (SOC)",
      "MITRE ATT&CK Framework",
      "Lockheed Martin Cyber Kill Chain",
      "David Bianco's Pyramid of Pain",
      "Unified Cyber Kill Chain",
      "Fundamentals of Cybersecurity Frameworks & Information Security Policy",
    ],
  },
  {
    id: "02",
    tag: "Technical Foundations",
    title: "Fundamentals of Networking & Windows",
    topics: [
      "OSI Model & TCP/IP Stack",
      "Network Protocols & Deep Dive",
      "Windows Fundamentals for SOC",
      "Internal Windows Events & Logging",
    ],
  },
  {
    id: "03",
    tag: "Core Tool",
    title: "SIEM Technology — Splunk",
    topics: [
      "Introduction to SIEM Concepts",
      "Splunk Setup, Basics, and Architecture",
      "Incident Detection, Investigation & Response with Splunk",
      "End-to-End SOC Workflow",
      "Incident Detection with SIEM — Live Lab",
    ],
  },
];

const items = [
  {
    title: "Expert Mentors",
    subtitle: "Practising analysts",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3L1.8 5.5l4.3-.6z" />
      </svg>
    ),
  },
  {
    title: "Live + Recorded",
    subtitle: "Flexible learning",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.5 12L3 7.5l1.4-1.4 3.1 3.1 5.1-5.1L14 5.5 7.5 12z" />
      </svg>
    ),
  },
  {
    title: "Real Threat Scenarios",
    subtitle: "Live lab exercises",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zM7 11L4 8l1.4-1.4L7 8.2l3.6-3.6L12 6l-5 5z" />
      </svg>
    ),
  },
  {
    title: "CompTIA Aligned",
    subtitle: "Industry recognised",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 0l2 6h6l-5 3.6 1.9 5.9L8 12l-4.9 3.5L5 9.6 0 6h6z" />
      </svg>
    ),
  },
  {
    title: "100% Placement",
    subtitle: "Assistance assured",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 10H7V7h2v4zm0-6H7V3h2v2z" />
      </svg>
    ),
  },
];

const frameworks = [
  {
    badge: "MITRE",
    title: "ATT&CK Framework",
    description:
      "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. Every SOC analyst uses ATT&CK for threat detection, investigation, and red-team planning.",
  },
  {
    badge: "Lockheed Martin",
    title: "Cyber Kill Chain",
    description:
      "The original seven-stage model for understanding how cyber attacks progress — from reconnaissance to actions on objectives. Learn to identify and break the chain at every phase before damage is done.",
  },
  {
    badge: "David Bianco",
    title: "Pyramid of Pain",
    description:
      "A hierarchy of threat intelligence indicators that reveals how painful it is for adversaries when each type of indicator is detected and blocked. Teaches analysts where to focus detection investment.",
  },
  {
    badge: "Unified",
    title: "Unified Cyber Kill Chain",
    description:
      "An evolution of the original kill chain, combining Lockheed Martin's model with MITRE ATT&CK into an 18-phase lifecycle for deeper, more complete coverage of modern attack paths and lateral movement.",
  },
  {
    badge: "Governance",
    title: "Cybersecurity Frameworks & InfoSec Policy",
    description:
      "ISO 27001, NIST CSF, and SOC 2 — the governance frameworks that shape enterprise security programmes. Understand how policy, compliance, and technical controls work together.",
  },
  {
    badge: "Operations",
    title: "SOC Functions & Analyst Roles",
    description:
      "Tier 1 through Tier 3 analyst responsibilities, escalation paths, shift handover protocols, SLA management, and the skills that distinguish an analyst who responds from one who investigates and hunts.",
  },
];

const outcomes = [
  "Monitor and triage security alerts across SIEM dashboards with speed and accuracy",
  "Analyse phishing emails and malicious payloads using header forensics and sandbox tools",
  "Build and run Splunk searches to detect, investigate, and escalate incidents",
  "Apply MITRE ATT&CK and kill chain models to map real attack patterns",
  "Perform endpoint investigation using Windows logs, EDR tools, and Sysinternals",
  "Execute incident response playbooks from detection through to containment and recovery",
  "Conduct proactive threat hunts to find adversaries who have bypassed automated detection",
];

const stats = [
  {
    number: "91%",
    label: "of graduates placed within 90 days of completion",
    dark: false,
  },
  {
    number: "3.5×",
    label: "average salary increase vs prior role",
    dark: true,
  },
  {
    number: "25+",
    label: "sessions across 6 specialist modules",
    dark: false,
  },
  {
    number: "100%",
    label: "placement assistance until you land your offer",
    dark: true,
  },
];

const tools = [
  "Splunk",
  "Wireshark",
  "VirusTotal",
  "Sysinternals",
  "McAfee ePO",
  "CrowdStrike EDR",
  "MITRE ATT&CK Navigator",
  "Any.run Sandbox",
  "Windows Event Viewer",
];

const steps = [
  {
    number: "01",
    title: "Free Counselling Call",
    description:
      "Speak with a practising SOC analyst who will honestly assess whether your background suits this program — and where you are likely to land once you complete it. No scripts, no pressure.",
  },
  {
    number: "02",
    title: "Live Training Begins",
    description:
      "Weekday evening and weekend batches with a lead instructor who works in cybersecurity. Every session is recorded. Lab environments are provided — no expensive software licenses required.",
  },
  {
    number: "03",
    title: "Live Lab Exercises",
    description:
      "Respond to real phishing campaigns, investigate simulated malware incidents in Splunk, hunt for threats in a live lab environment, and build a portfolio of documented incident reports that hiring managers recognise.",
  },
  {
    number: "04",
    title: "Placement Support",
    description:
      "Resume builds, mock technical interviews, LinkedIn optimisation, and direct introductions to hiring managers — your dedicated placement manager stays with you until the offer letter arrives.",
  },
];

const testimonials = [
  {
    initials: "KS",
    name: "Karan Singh",
    role: "SOC Analyst Tier 2 — Wipro, Mumbai",
    tag: "Network → SOC",
    quote:
      "I came from a networking background with zero security experience. The MITRE ATT&CK and kill chain modules made everything click. I now monitor a SOC for a major BFSI client and use Splunk every single day.",
  },
  {
    initials: "MP",
    name: "Meera Pillai",
    role: "Cyber Threat Analyst — TCS, Bengaluru",
    tag: "Fresher",
    quote:
      "The phishing analysis module was unlike anything I'd seen in other courses — we analysed real headers from real campaigns. My interview panel was visibly impressed when I walked them through an email forensics process.",
  },
  {
    initials: "RV",
    name: "Rohit Varma",
    role: "Incident Responder — HCL Security, Hyderabad",
    tag: "Career Switch",
    quote:
      "Module 6 — threat hunting and incident response — is worth the entire fee alone. We ran live hunts inside a lab environment using actual threat intelligence. That practical depth is what separates this course from everything else on the market.",
  },
];
function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-[14px] h-[14px] fill-[#c7a86d]">
      <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3L1.8 5.5l4.3-.6z" />
    </svg>
  );
}

const faqs = [
  {
    question: "Do I need prior cybersecurity experience to enrol?",
    answer:
      "No prior security experience is required. The program begins from fundamentals — networking, the OSI model, and Windows architecture — before building into SIEM, threat detection, and incident response. A basic comfort with computers and a strong curiosity about how systems are attacked and defended is all you need to start.",
  },
  {
    question: "What software and lab environments will I need?",
    answer:
      "All lab environments are provided as part of the program. You will not need to purchase any software licences. Labs are cloud-accessible, so a reasonably modern laptop with a stable internet connection is sufficient. Splunk free tier and trial environments are used where applicable, and your instructor will guide you through every setup step.",
  },
  {
    question: "Can I study this program while working full-time?",
    answer:
      "Absolutely — the majority of our students are employed when they enrol. Classes run on weekday evenings and weekends. Every session is recorded and available immediately after, so missing a live class is never a crisis. Most students spend 8–12 hours per week across live sessions, lab work, and self-study.",
  },
  {
    question: "What certifications does this program prepare me for?",
    answer:
      "The curriculum is aligned to CompTIA Security+, CompTIA CySA+ (Cybersecurity Analyst), and the EC-Council CEH (Certified Ethical Hacker) syllabi. Graduates who choose to sit these exams after completing the program consistently report that the coursework prepared them thoroughly. You will also receive the Edtech Academy completion certificate, which is recognised by our hiring partners.",
  },
  {
    question:
      "What roles will I be qualified for after completing this program?",
    answer:
      "The program prepares you for Tier 1 and Tier 2 SOC Analyst roles, Cyber Threat Analyst positions, Incident Response Analyst roles, and junior Security Engineer positions. The endpoint and malware modules also open paths into EDR-focused roles. Our placement track record includes roles at TCS, Wipro, HCL, Infosys, and multiple MSSPs.",
  },
  {
    question: "How does placement assistance work?",
    answer:
      "You are assigned a named placement manager on completing the program. They will work with you on your cybersecurity resume, LinkedIn profile optimisation, technical interview preparation (including Splunk query walkthroughs and incident response scenario practice), and direct introductions to hiring managers at partner organisations. This support continues actively until you receive an offer. 91% of our SOC graduates receive at least one offer within 90 days.",
  },
];
export default function CyberSecurityPage() {
  const [openModule, setOpenModule] = useState("01");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#FAF8F3] text-[#1C1C1C] overflow-x-hidden">
      {/* Announcement */}
      <div className="bg-black text-white/80 text-center py-3 px-4 text-sm">
        <span className="text-[#C9A84C] font-semibold">
          New Batch Starting Soon
        </span>{" "}
        — SOC Analyst seats are limited.
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F3] border-b border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-[#C9A84C]" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/20" />
              </div>
            </div>

            <div>
              <h1 className="font-serif text-lg font-bold text-black">
                Edtech Academy
              </h1>
              <p className="text-[10px] tracking-[2px] uppercase text-[#7A7060]">
                Professional Training
              </p>
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li className="text-[#7A7060] hover:text-black">
              <a href="#">Programs</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#curriculum">Curriculum</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#outcomes">Outcomes</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#faq">FAQ</a>
            </li>

            <li>
              <a
                href="#enrol"
                className="bg-black text-white px-5 py-2 rounded-sm"
              >
                Enrol Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="uppercase tracking-[3px] text-[#C9A84C] text-xs font-semibold">
                Cybersecurity Program
              </span>
            </div>

            <h1 className="text-white font-serif text-3xl lg:text-7xl leading-tight font-bold">
              Become a{" "}
              <span className="italic text-[#C9A84C]">SOC Analyst.</span>
              <br />
              Defend the Digital World.
            </h1>

            <p className="text-white/60 text-lg leading-8 mt-8 max-w-xl">
              A hands-on, threat-focused curriculum spanning SOC operations,
              SIEM technology, phishing analysis, endpoint security, and live
              incident response.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "SOC & Frameworks",
                "Networking & Windows",
                "SIEM / Splunk",
                "Threat Hunting",
                "Incident Response",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 text-xs rounded-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#C9A84C] text-black px-8 py-4 font-semibold rounded-sm">
                Book Free Counselling →
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-sm">
                View Curriculum
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 border-t border-white/10 mt-14 pt-10">
              {[
                { number: "6", label: "Core modules" },
                { number: "25+", label: "Topic sessions" },
                { number: "100%", label: "Placement support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h2 className="text-white text-4xl font-serif font-bold">
                    {stat.number}
                  </h2>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-md p-8 shadow-2xl">
            <h2 className="font-serif text-3xl font-bold text-black">
              Book a Free Session
            </h2>

            <p className="text-gray-500 mt-2">
              A career advisor will reach out within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4"
            />

            <select className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4">
              <option>Select Current Status</option>
              <option>Student</option>
              <option>Graduate</option>
              <option>Working Professional</option>
            </select>

            <button className="w-full bg-black text-white py-4 mt-6 font-semibold">
              Book My Free Session →
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 No spam. No pressure.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- TRUST STRIP --> */}
      <div className="w-full bg-[#F0EDE6] border-y border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-6 py-5 px-5">
          {/* Label */}
          <div className="text-[#7A7060] font-bold text-lg whitespace-nowrap">
            Why Edtech
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-black text-[#C9A84C] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-black font-semibold text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- KEY FRAMEWORKS --> */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-16 px-5 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            {/* Left */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-[#C9A84C]"></div>
                <span className="uppercase tracking-[0.2em] text-[#C9A84C] text-sm font-semibold">
                  Core Frameworks
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-serif">
                The Models Every
                <br />
                SOC Analyst <em className="text-[#C9A84C] italic">Lives By.</em>
              </h2>
            </div>

            {/* Right */}
            <p className="text-gray-400 text-base leading-relaxed max-w-xl">
              Before tools come frameworks. This program grounds you in the
              threat models used by security teams at every major organisation
              worldwide.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {frameworks.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 hover:bg-white/10 transition duration-300"
              >
                {/* Badge */}
                <div className="mb-5">
                  <span className="inline-block bg-yellow-400/10 text-[#C9A84C] border border-yellow-400/30 text-xs font-semibold px-3 py-1 rounded-sm tracking-wide uppercase">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 leading-snug font-serif">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        className="max-w-7xl mx-auto px-5 lg:px-12 py-10 md:py-24"
      >
        <div className="flex flex-col lg:items-end lg:flex-row justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="uppercase tracking-[3px] text-[#C9A84C] text-xs font-semibold">
                Course Content
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">
              Six Modules.
              <br />
              One <span className="italic text-[#C9A84C]">Complete</span> SOC
              Career.
            </h2>
          </div>

          <p className="max-w-xl text-gray-600 text-lg leading-8">
            From network fundamentals to live threat hunting — a structured
            curriculum that mirrors the real workflow of a working SOC analyst.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#E2DDD4]">
          {modules.map((module) => (
            <div key={module.id} className="border-b border-[#E2DDD4] py-6">
              <button
                onClick={() =>
                  setOpenModule(openModule === module.id ? "" : module.id)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-black text-[#C9A84C] flex items-center justify-center font-serif font-bold">
                    {module.id}
                  </div>

                  <div>
                    <p className="uppercase text-xs tracking-[2px] text-[#C9A84C] font-semibold">
                      {module.tag}
                    </p>

                    <h3 className="font-serif text-2xl font-bold mt-1">
                      {module.title}
                    </h3>
                  </div>
                </div>

                <span className="text-3xl text-gray-500">
                  {openModule === module.id ? "−" : "+"}
                </span>
              </button>

              {openModule === module.id && (
                <div className="grid md:grid-cols-2 gap-4 mt-8 pl-0 md:pl-16">
                  {module.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="border border-[#E2DDD4] p-4 bg-white"
                    >
                      <div className="flex gap-4">
                        <span className="text-[#C9A84C] font-serif font-bold">
                          {index + 1}
                        </span>

                        <p className="text-gray-700 leading-7">{topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <!-- CAREER OUTCOMES & TOOLS --> */}
      <section id="outcomes" className="bg-white">
        <div className="max-w-7xl mx-auto py-10 md:py-20 px-5 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-[1px] bg-[#C9A84C]"></div>
                <span className="uppercase tracking-[0.2em] text-sm text-[#C9A84C] font-medium">
                  What You'll Learn
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-gray-900">
                Skills That Get You
                <br />
                Into the <em className="text-[#C9A84C] italic">SOC.</em>
              </h2>

              {/* Description */}
              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
                Graduate with the technical depth and operational confidence to
                walk into a Tier 1 or Tier 2 SOC analyst role from day one.
              </p>

              {/* Outcomes */}
              <div className="mt-10 space-y-5">
                {outcomes.map((item, index) => {
                  const [boldText, ...rest] = item.split(" ");
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                    >
                      <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0"></div>

                      <p className="text-gray-700 leading-relaxed">
                        <strong>{boldText}</strong> {rest.join(" ")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid sm:grid-cols-2 gap-5">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`rounded-3xl p-6 border transition hover:-translate-y-1 font-serif ${
                      stat.dark
                        ? "bg-black text-[#C9A84C] border-gray-800"
                        : "bg-[#F0EDE6] text-gray-900 border-gray-200"
                    }`}
                  >
                    <div className="text-4xl font-bold">{stat.number}</div>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        stat.dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tools Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tools You'll Operate
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Every tool in this program is industry-standard — the exact
                  stack used inside real SOC environments across enterprise
                  organisations.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-yellow-100 hover:border-yellow-300 transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- HOW IT WORKS --> */}
      <section className="py-10 md:py-[120px] bg-black overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

            <span className="uppercase tracking-[2px] text-[12px] font-medium text-[#C9A84C]">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-2px] font-semibold font-serif text-white max-w-[760px]">
            From Enrolment to{" "}
            <em className="italic font-light text-[#C9A84C]">Offer Letter.</em>
          </h2>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-black border border-white/10 rounded-sm p-8 min-h-[360px] flex flex-col"
              >
                {/* Large Number */}
                <div className="text-[72px] leading-none font-bold font-serif tracking-[-4px]">
                  {step.number}
                </div>

                {/* Marker */}
                <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-6"></div>

                {/* Title */}
                <h3 className="mt-6 text-[24px] leading-[1.3] font-semibold text-white font-serif">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-[1.9] text-gray-400 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIALS --> */}
      <section className="py-10 md:py-[100px] bg-[#f8f6f1]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

              <span className="uppercase tracking-[2px] text-[12px] font-medium text-[#C9A84C]">
                Student Stories
              </span>
            </div>

            <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-2px] font-semibold font-serif text-[#111111]">
              Real People.{" "}
              <em className="italic font-light text-[#C9A84C]">
                Real Careers.
              </em>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e7e1d8] rounded-lg p-8 flex flex-col justify-between min-h-[420px]"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[17px] leading-[1.9] text-[#1a1a1a] font-light font-serif flex-1 italic">
                  {item.quote}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-[#ece7de]">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex items-center justify-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#111111] text-[#C9A84C] text-[14px] font-semibold tracking-[1px] flex items-center justify-center">
                        {item.initials}
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="flex flex-col">
                      <strong className="text-[15px] font-semibold text-[#111111]">
                        {item.name}
                      </strong>

                      <span className="text-[13px] leading-[1.6] text-[#7a7670] font-light">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="hidden sm:flex px-4 py-2 rounded-full border border-[#ddd6cb] bg-[#faf8f3] text-[11px] uppercase tracking-[1px] text-[#6d6a66] font-medium whitespace-nowrap">
                    {item.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <section id="faq" className="bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto py-10 md:py-20 lg:py-28 px-5 sm:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.2fr] gap-14 lg:gap-20">
            {/* Left Side */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-[#C9A84C]">
                  Common Questions
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[#0b1727] text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] tracking-[-0.03em]">
                Everything You
                <br />
                Need to <em className="italic text-[#C9A84C]">Know.</em>
              </h2>

              {/* Description */}
              <p className="mt-7 text-[15px] sm:text-[16px] leading-8 text-[#6d6a63] font-light max-w-md">
                Honest answers to the questions every prospective SOC analyst
                asks before enrolling.
              </p>

              {/* CTA Card */}
              <div className="mt-10 border border-[#e6dfd2] bg-white rounded-[24px] p-7 shadow-sm">
                <p className="text-[15px] leading-7 text-[#5d5a54] font-light">
                  Still have questions? Our advisors are practising
                  cybersecurity professionals available for a free 30-minute
                  call.
                </p>

                <a
                  href="#enrol"
                  className="inline-flex items-center mt-5 text-[#0b1727] text-sm font-semibold tracking-wide hover:text-[#c7a463] transition-colors"
                >
                  Schedule a free call →
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border rounded-[22px] transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#0b1727] border-[#0b1727]"
                        : "bg-white border-[#e6dfd2]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-5 text-left px-7 py-6"
                    >
                      <h3
                        className={`text-[16px] sm:text-[17px] leading-7 font-medium transition-colors ${
                          isOpen ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      <span
                        className={`text-2xl leading-none transition-colors ${
                          isOpen ? "text-[#c7a463]" : "text-[#9b8d74]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`px-7 pb-7 text-[15px] leading-8 font-light ${
                            isOpen ? "text-[#d7dce2]" : "text-[#6d6a63]"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BOTTOM CTA --> */}
      <section
        id="enrol"
        className="bg-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto py-10 md:py-20 lg:py-28 px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_520px] gap-14 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="pt-2">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] tracking-[-0.03em]">
                One Conversation
                <br />
                Can Launch Your{" "}
                <em className="italic text-[#C9A84C]">Cyber Career.</em>
              </h2>

              <p className="mt-8 text-[15px] sm:text-[16px] leading-8 text-[#b6c0cb] font-light max-w-2xl">
                Our advisors are working SOC analysts and incident responders.
                No scripts, no pressure — just an honest conversation about your
                background, your goals, and the fastest path to your first
                security role.
              </p>

              {/* Checklist */}
              <ul className="mt-10 space-y-5">
                {[
                  "Free 1:1 career counselling call (30 minutes)",
                  "Personalised assessment of your cybersecurity readiness",
                  "Salary benchmarking for SOC roles in your city",
                  "EMI and scholarship options discussed upfront",
                  "No obligation — learn everything, decide later",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-[#c7a463]/20 border border-[#c7a463] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#c7a463]" />
                    </div>

                    <span className="text-[#d7dce2] text-[15px] sm:text-[16px] leading-7 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form Panel */}
            <div className="bg-white rounded-lg p-7 sm:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              {/* Header */}
              <div>
                <h3 className="text-[#0b1727] text-[28px] font-medium tracking-[-0.02em]">
                  Book Your Free Session
                </h3>

                <p className="mt-2 text-[14px] leading-7 text-[#6d6a63] font-light">
                  A career advisor will call you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form className="mt-8 space-y-5">
                {/* Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="Arjun"
                      className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Mehta"
                      className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Phone / WhatsApp
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="arjun@example.com"
                    className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                  />
                </div>

                {/* Current Status */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Current Status
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all text-[#111827]">
                    <option value="">Select...</option>
                    <option>Final Year Student</option>
                    <option>Recent Graduate (0–2 yrs)</option>
                    <option>Working Professional (2–5 yrs)</option>
                    <option>Working Professional (5+ yrs)</option>
                    <option>Career Break / Returning to Work</option>
                  </select>
                </div>

                {/* Source */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    How Did You Hear About Us
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all text-[#111827]">
                    <option value="">Select...</option>
                    <option>LinkedIn</option>
                    <option>Google Search</option>
                    <option>Friend / Colleague</option>
                    <option>YouTube</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-black text-white text-[15px] font-semibold tracking-wide hover:bg-[#b89454] transition-all duration-300"
                >
                  Book My Free Session →
                </button>

                {/* Note */}
                <p className="text-center text-[13px] leading-6 text-[#8b8b84] font-light">
                  🔒 No spam. No pressure. Your information is completely
                  confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer className="bg-black border-t border-white/10">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center gap-4">
                {/* Logo */}
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#C9A84C"
                    />
                    <rect
                      x="10"
                      y="2"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <rect
                      x="2"
                      y="10"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.1)"
                    />
                  </svg>
                </div>

                <strong className="text-white text-[20px] tracking-[-0.02em] font-semibold">
                  Edtech Academy
                </strong>
              </a>

              <p className="mt-6 max-w-md text-[15px] leading-8 text-[#aeb8c4] font-light">
                Professional training and career placement across Business
                Analysis, Project Management, Cyber Security, and Data Science.
                Training is the beginning — placement is the promise.
              </p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Programs
              </h4>

              <ul className="space-y-4">
                {[
                  "Business Analyst",
                  "Project Management",
                  "Cyber Security",
                  "Data Science",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institution */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Institution
              </h4>

              <ul className="space-y-4">
                {[
                  "About Us",
                  "Our Faculty",
                  "Hiring Partners",
                  "Blog & Insights",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Contact
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+911800000000"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    1800-000-0000 (Free)
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:admissions@edtechacademy.in"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors break-all"
                  >
                    admissions@edtechacademy.in
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    Student Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[#7f8a96] text-[14px] font-light text-center md:text-left">
              © 2025 Edtech Academy. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#7f8a96] text-[14px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
