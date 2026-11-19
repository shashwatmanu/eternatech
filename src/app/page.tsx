"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Layers,
  Clock,
  MessageSquare,
  Workflow,
  CheckCircle2,
  Globe,
  Database,
  Terminal,
  Zap,
  Cpu,
  Flame,
  FileSpreadsheet,
  ChevronRight,
  Code2,
} from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parallax on scroll for hero cards
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -115]);

  // Interactive 3D Perspective Tilt for Hero Showcase Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const WHATSAPP_PRIMARY =
    "https://wa.me/917827775679?text=Hi%20Shashwat%2C%20I%20visited%20EternaTech.in%20and%20would%20love%20to%20connect.";
  const WHATSAPP_FOUNDER =
    "https://wa.me/917827775679?text=Hi%20Shashwat%2C%20great%20connecting%20with%20you!";
  const EMAIL_FOUNDER = "mailto:shashwat@eternatech.in";
  const CALL_FOUNDER = "tel:+917827775679";

  const capabilities = [
    {
      num: "01",
      tag: "CORE PLATFORMS",
      title: "Custom Web & Mobile Applications",
      desc: "Full-stack client platforms, partner portals, and native-feel iOS/Android apps built with low-latency modern architecture capable of high-throughput transactions.",
      highlights: [
        "Sub-second Next.js App Router & React Native architecture",
        "Role-based access control (RBAC) & enterprise-grade auth",
        "Multi-tenant database design on PostgreSQL & Supabase",
        "Zero per-seat software licensing fees — 100% IP ownership",
      ],
      icon: Globe,
    },
    {
      num: "02",
      tag: "HIGH DEMAND",
      title: "Practical AI & WhatsApp Automation",
      desc: "Automated lead qualification, conversational order booking, PDF invoice parsing, and custom AI agents connected directly into your company databases.",
      highlights: [
        "24/7 WhatsApp API lead intake with zero human drop-off",
        "OCR and structured LLM document & invoice extraction",
        "Real-time bidirectional synchronization with internal ERPs",
        "Comprehensive audit logs and immediate executive escalations",
      ],
      icon: Zap,
    },
    {
      num: "03",
      tag: "INTERNAL ENGINES",
      title: "Bespoke Internal Systems (ERP / CRM)",
      desc: "Tailored operational control centers built around your exact business rules—inventory movements, billing reconciliations, field team coordination, and executive analytics.",
      highlights: [
        "Custom billing, dispatch, and ledger reconciliation engines",
        "Executive oversight boards with live margin analysis",
        "Seamless migration from messy Excel spreadsheets",
        "Dedicated private cloud deployment on AWS or Google Cloud",
      ],
      icon: Database,
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      timeline: "48 Hours",
      desc: "We dissect your existing operations, identify high-leverage bottlenecks, and map the exact technical architecture and delivery roadmap.",
    },
    {
      step: "02",
      title: "Iterative Sprint Builds",
      timeline: "Weekly Milestones",
      desc: "Weekly deployments on private staging environments. You test real software every 7 days with direct founder access and zero black-box delays.",
    },
    {
      step: "03",
      title: "Deployment & Scale",
      timeline: "Production SLA",
      desc: "Production rollout with automated monitoring, high availability, security hardening, and continuous engineering improvements.",
    },
  ];

  const faqs = [
    {
      q: "How does working with EternaTech differ from traditional agencies?",
      a: "Traditional agencies hand your vision over to junior developers and account managers, resulting in bloated timelines and generic templates. At EternaTech, every system is led directly by technical leadership, ensuring senior engineering rigor, weekly working builds, and clean, enterprise-grade code you own completely.",
    },
    {
      q: "What is your typical turnaround timeline for a production build?",
      a: "Depending on system scope, a comprehensive MVP or specialized automation pipeline is deployed in 2 to 4 weeks. Full enterprise ERP and mobile platforms typically launch in 6 to 8 weeks, with operational milestones delivered and usable every 7 days.",
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You do. 100%. Upon completion, all source code, design assets, and cloud configurations belong entirely to your enterprise with zero recurring royalty or per-seat vendor lock-in.",
    },
    {
      q: "Do you offer post-launch support and infrastructure monitoring?",
      a: "Yes. We offer dedicated engineering retainers covering ongoing optimizations, uptime monitoring, security updates, and iterative feature rollouts as your business expands.",
    },
  ];

  return (
    <div className="obsidian-canvas min-h-screen text-slate-100 relative pb-28 sm:pb-16 overflow-x-hidden selection:bg-blue-600/30 selection:text-cyan-200">
      {/* Precision Dot Grid Canvas */}
      <div className="fixed inset-0 architectural-grid opacity-35 pointer-events-none z-0" />

      {/* Kinetic Ambient Glow Lighting */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[750px] bg-blue-600/15 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="fixed top-[40%] -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10vw] -left-40 w-[650px] h-[650px] bg-blue-700/12 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* 1. STICKY GLASS HEADER */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#06080F]/80 hairline-b transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative z-10">
          {/* Studio Brandmark with Enlarged Colored Logo */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/logo-colored.png"
                alt="EternaTech Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(56,189,248,0.4)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
                  EternaTech
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-cyan-400 font-mono font-medium mt-1">
                SOFTWARE &amp; AI STUDIO · NCR
              </span>
            </div>
          </a>

          {/* Direct Private Action */}
          <div className="flex items-center gap-4">
            <a
              href="#capabilities"
              className="hidden sm:inline-block text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors px-3 py-1.5"
            >
              Capabilities
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 2. HERO SECTION — AWWWARDS-TIER 2.5D INTERACTIVE IMPACT */}
        <section
          ref={heroRef}
          className="relative pt-12 sm:pt-20 pb-16 sm:pb-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Messaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] sm:text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold tracking-tight">
                  ACCEPTING Q4/Q1 BUILDS · NCR &amp; GLOBAL
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-5">
                Custom Apps &amp; AI Systems{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  Engineered for Scale.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
                We replace slow, manual operations with bespoke web platforms,
                mobile apps, and intelligent WhatsApp &amp; backend automations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <a
                  href={WHATSAPP_PRIMARY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-200" />
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base text-slate-200 glass-panel hover:border-cyan-500/40 hover:text-white transition-all"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Metric Proof Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-lg font-mono">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    &lt; 14 Days
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                    MVP Deployment
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-300 tracking-tight">
                    24/7
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                    AI Autonomous Ops
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400 tracking-tight">
                    100%
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                    Direct Founder Lead
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 2.5D Layered Parallax Card Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative perspective-[1200px] w-full"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              {/* Glowing backplate orb */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/25 rounded-3xl blur-2xl transform scale-95 -z-10" />

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative rounded-2xl glass-panel-elevated p-5 sm:p-6 transition-shadow duration-300 glow-border"
              >
                {/* Header bar of the simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-blue-500/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-xs font-mono text-slate-300 ml-2">
                      live_pipeline.sys
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-cyan-300 border border-blue-500/30">
                    REALTIME ENGINE
                  </span>
                </div>

                {/* 3 Vertical Parallax Layers inside the visual */}
                <div className="space-y-3.5 relative">
                  {/* Layer 1: Chaos before */}
                  <motion.div
                    style={{ y: card1Y }}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-rose-500/25 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-950/70 border border-rose-500/30 flex items-center justify-center text-rose-400">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">
                          Manual Excel &amp; WhatsApp Chaos
                        </div>
                        <div className="text-[10px] font-mono text-rose-300/80">
                          Lag: 4.8 hrs · Lost leads · Untracked
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-700/40">
                      BOTTLENECK
                    </span>
                  </motion.div>

                  {/* Connecting Flow Arrow */}
                  <div className="flex items-center justify-center -my-1">
                    <div className="w-6 h-6 rounded-full bg-blue-900/60 border border-blue-400/30 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-cyan-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Layer 2: EternaTech AI Core Engine */}
                  <motion.div
                    style={{ y: card2Y }}
                    className="p-4 rounded-xl bg-gradient-to-r from-blue-950/90 via-slate-900/90 to-blue-950/90 border border-cyan-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                          <Cpu className="w-4 h-4 animate-spin [animation-duration:8s]" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide">
                          EternaTech AI Engine
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        PROCESSING
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-950/70 rounded-lg p-2 border border-blue-500/20">
                      <span className="text-cyan-400">&gt;</span> parsing customer
                      intent...
                      <br />
                      <span className="text-emerald-400">&gt;</span> dispatching
                      custom web portal &amp; WhatsApp payload
                    </div>
                  </motion.div>

                  {/* Connecting Flow Arrow */}
                  <div className="flex items-center justify-center -my-1">
                    <div className="w-6 h-6 rounded-full bg-blue-900/60 border border-blue-400/30 flex items-center justify-center">
                      <Workflow className="w-3 h-3 text-cyan-300" />
                    </div>
                  </div>

                  {/* Layer 3: Automated Result */}
                  <motion.div
                    style={{ y: card3Y }}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">
                          Automated Orders, Invoicing &amp; Ops
                        </div>
                        <div className="text-[10px] font-mono text-emerald-300/80">
                          Latency: 320ms · 100% Synced to ERP
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-700/40">
                      SOLVED
                    </span>
                  </motion.div>
                </div>

                {/* Footer status of interactive visual */}
                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Zero
                    Human Bottlenecks
                  </span>
                  <span className="text-cyan-300">2.5D DEPTH</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. THE BOTTLENECK / THE SHIFT */}
        <section className="py-20 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-500/30 text-[11px] font-mono text-rose-300 mb-3">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>THE BOTTLENECK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Legacy workflows silently tax your growth.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              When business operations depend on manual copy-pasting, messy
              group chats, and cookie-cutter SaaS templates, scaling becomes an
              expensive headache.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400/60 transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-rose-400/90 mb-1 line-through">
                Scattered Operations
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                Unified Custom Web &amp; Mobile Portals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Replace fragmented spreadsheets and disconnected tools with a
                centralized, lightning-fast digital surface built specifically
                for your customers and staff.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                <span>01 · CENTRALIZATION</span>
                <span>ZERO LEAKAGE</span>
              </div>
            </div>

            <div className="glass-panel-elevated rounded-2xl p-6 relative overflow-hidden group border-blue-500/30 shadow-[0_0_25px_rgba(37,99,235,0.18)]">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400/60 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-rose-400/90 mb-1 line-through">
                Manual Follow-ups &amp; Billing
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                24/7 AI &amp; WhatsApp Workflow Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Automate customer intake, quotes, order status updates, and
                invoice notifications directly on WhatsApp with intelligent
                fallback and full audit trails.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                <span>02 · VELOCITY</span>
                <span>SUB-SECOND OPS</span>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400/60 transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-rose-400/90 mb-1 line-through">
                Slow 6-Month Agency Cycles
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                Rapid, Production-Grade Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct founder-led architecture with zero bureaucracy. We ship
                working, production-ready software in days and iterate rapidly
                with weekly transparent milestones.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                <span>03 · EXECUTION</span>
                <span>WEEKLY SHIPS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CORE CAPABILITIES (3-Pillar Bento Grid) */}
        <section id="capabilities" className="py-20 border-t border-slate-800/80">
          <div className="max-w-xl mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-mono text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CAPABILITIES &amp; SPECIALIZATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Engineered for high-leverage business outcomes.
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              We don&apos;t build vanity websites. We construct high-performance
              infrastructure, AI automations, and software engines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Pillar 01 */}
            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-blue-500/25">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-950 border border-blue-500/30 text-cyan-300 font-semibold">
                    PILLAR 01
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    NEXT.JS · REACT NATIVE · CLOUD
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Custom Web &amp; Mobile Applications
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Full-stack customer-facing platforms, partner portals, and
                  native-feel iOS/Android applications built with modern, scalable
                  architectures capable of millions of transactions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>High-throughput Next.js &amp; Tailwind platforms</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Sub-second mobile client experiences</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Role-based access &amp; secure auth</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Automated payment gateways &amp; ledger sync</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                <span className="text-slate-400">Tech Core:</span>
                <span className="text-cyan-300">Next.js App Router · TypeScript · Cloudflare/AWS</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="lg:col-span-5 glass-panel-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-900/60 border border-cyan-500/40 text-cyan-200 font-semibold">
                    PILLAR 02 · HIGH DEMAND
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    WHATSAPP API
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Practical AI &amp; WhatsApp Automation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Automated lead qualification, conversational order taking,
                  PDF invoice parsing, and custom AI agents connected directly into
                  your company databases.
                </p>

                <div className="space-y-2.5 mb-6 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-slate-200 flex items-center justify-between">
                    <span className="text-cyan-300">WhatsApp Chatbots</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Instant Response</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-slate-200 flex items-center justify-between">
                    <span className="text-cyan-300">OCR Document Extraction</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">99.8% Accuracy</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-slate-200 flex items-center justify-between">
                    <span className="text-cyan-300">CRM Automated Dispatch</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Zero Manual</span>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-cyan-400/40 text-xs font-semibold text-white transition-colors"
              >
                <span>Automate your WhatsApp channel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pillar 03 */}
            <div className="lg:col-span-12 glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-950 border border-blue-500/30 text-cyan-300 font-semibold">
                      PILLAR 03
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      CUSTOM ERP &amp; CRM ENGINES
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Bespoke Internal Systems (ERP / CRM)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Tailored operational control centers built around your exact
                    business rules—inventory movements, billing reconciliations,
                    field team coordination, and executive analytics. No recurring
                    per-seat SaaS extortion.
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-blue-500/20">
                    <Database className="w-4 h-4 text-cyan-400 mb-1.5" />
                    <div className="text-white font-semibold">100% Owned</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      No per-user licensing fees
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-blue-500/20">
                    <Terminal className="w-4 h-4 text-cyan-400 mb-1.5" />
                    <div className="text-white font-semibold">Custom Logic</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Tailored to your workflow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW WE BUILD */}
        <section className="py-20 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-mono text-cyan-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE EXECUTION PLAYBOOK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              How We Build
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              A transparent, high-cadence engineering sprint cycle designed to
              get you to market in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 relative border-t-2 border-t-cyan-400"
              >
                <div className="text-2xl font-black font-mono text-cyan-400 mb-3">
                  {m.step}.
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {m.desc}
                </p>
                <div className="text-[11px] font-mono text-cyan-300 bg-blue-950/60 p-2 rounded-lg border border-blue-500/30">
                  Cadence: {m.timeline}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMMON QUESTIONS */}
        <section className="py-20 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-mono text-cyan-300 mb-3">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLARITY &amp; TERMS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="glass-panel rounded-xl overflow-hidden border border-blue-500/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed border-t border-slate-800 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 7. FOUNDER & DIRECT CONTACT SECTION */}
        <section
          id="contact"
          className="py-20 border-t border-slate-800/80 mb-12"
        >
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.25)] border-blue-500/40 max-w-4xl mx-auto">
            {/* Ambient decorative glow in card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Founder Bio Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-8 border-b border-blue-500/20 mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                <Image
                  src="/logo-colored.png"
                  alt="EternaTech"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-950 text-[10px] font-mono text-cyan-300 border border-blue-500/30 mb-1.5 font-semibold">
                  DIRECT FOUNDER ACCESS
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Shashwat Manu
                </h3>
                <div className="text-xs sm:text-sm font-mono text-slate-400">
                  Founder &amp; Technical Director, EternaTech
                </div>
              </div>
            </div>

            {/* Founder Note */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 italic">
              &ldquo;Engineering-first technology studio based in Delhi NCR,
              partnering with founders and ambitious businesses to ship
              high-leverage software. Let&apos;s discuss your roadmap directly—no
              account managers or sales layers.&rdquo;
            </p>

            {/* Direct Real Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 font-medium">
              <a
                href={WHATSAPP_FOUNDER}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-cyan-200" />
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={CALL_FOUNDER}
                className="group flex items-center justify-center gap-2.5 p-3.5 rounded-xl glass-panel hover:border-cyan-400/50 text-white font-semibold text-xs sm:text-sm transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call +91 78277 75679</span>
              </a>

              <a
                href={EMAIL_FOUNDER}
                className="group flex items-center justify-center gap-2.5 p-3.5 rounded-xl glass-panel hover:border-cyan-400/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>shashwat@eternatech.in</span>
              </a>
            </div>

            {/* Location & Availability Status */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Based in
                Delhi NCR &amp; Ghaziabad, India
              </span>
              <span className="text-slate-500">
                Operating globally across IST, GMT &amp; EST
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FLOATING CONCIERGE DOCK FOR MOBILE */}
      <aside className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <div className="glass-panel-elevated rounded-full p-2.5 pl-3.5 flex items-center justify-between shadow-2xl border border-cyan-400/35 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <Image
                src="/logo-colored.png"
                alt="EternaTech"
                width={36}
                height={36}
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-none">
                EternaTech
              </span>
              <span className="text-[9px] text-cyan-400 tracking-wider uppercase font-mono mt-0.5">
                Available Q4/Q1
              </span>
            </div>
          </div>

          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </aside>

      {/* 9. MINIMALIST FOOTER */}
      <footer className="relative border-t border-slate-900 py-8 px-4 sm:px-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <Image
                src="/logo-colored.png"
                alt="EternaTech"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-slate-400 tracking-wider">
              ETERNATECH
            </span>
            <span>·</span>
            <span>Ghaziabad / Delhi NCR, India</span>
          </div>
          <div>© 2026 EternaTech · eternatech.in · All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
