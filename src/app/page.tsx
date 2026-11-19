"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Shield,
  Layers,
  Clock,
  Compass,
  MessageCircle,
  ExternalLink,
  Cpu,
  Workflow,
  CheckCircle2,
  Lock,
  Globe,
  Database,
  Terminal,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const WHATSAPP_PRIMARY =
    "https://wa.me/917827775679?text=Hi%20Shashwat%2C%20I%20visited%20EternaTech.in%20and%20would%20love%20to%20discuss%20a%20project.";
  const EMAIL_PRIMARY = "mailto:shashwat@eternatech.in";
  const CALL_PRIMARY = "tel:+917827775679";

  const architecturalWorks = [
    {
      title: "Omnichannel WhatsApp Commerce Engine",
      client: "Enterprise Retail & Distribution",
      metric: "98.4% Autonomous Flow",
      description:
        "Engineered an automated WhatsApp core handling over 14,000 monthly SKU inquiries, dynamic quote generation, and instant ERP order booking without human latency.",
      tags: ["WhatsApp Cloud API", "FastAPI", "PostgreSQL", "Next.js"],
      accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Unified Logistics & Driver Fleet Portal",
      client: "Supply Chain Conglomerate",
      metric: "4.2x Faster Dispatch",
      description:
        "Bespoke mobile dispatch web app with offline-first synchronization, automated trip manifests, and GPS-stamped delivery verification replacing 60+ legacy Excel logs.",
      tags: ["Mobile PWA", "Cloudflare Workers", "Realtime Sync"],
      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
      title: "Automated Document OCR & Ledger Sync",
      client: "Private Manufacturing & Export",
      metric: "320ms Extraction Time",
      description:
        "Intelligent multi-lingual invoice and tax document parser wiring vendor WhatsApp submissions directly into central financial ledgers with 99.8% precision.",
      tags: ["Vision LLM", "Custom ERP", "Zero SaaS Licensing"],
      accent: "from-amber-500/15 via-blue-500/10 to-transparent",
    },
  ];

  const capabilities = [
    {
      num: "I",
      tag: "FLAGSHIP",
      title: "Bespoke Web & Mobile Platforms",
      subtitle: "High-throughput consumer platforms and internal operations portals",
      desc: "Architected for enterprises that have outgrown off-the-shelf templates. We engineer low-latency, resilient web and mobile applications with bespoke workflows, custom ledgers, and zero software licensing bloat.",
      highlights: [
        "Sub-second load performance across mobile networks",
        "Tailored customer portals & field-team mobile apps",
        "Enterprise-grade security, RBAC & payment gateway orchestration",
        "Zero per-seat software licensing fees — 100% intellectual property ownership",
      ],
      icon: Globe,
    },
    {
      num: "II",
      tag: "AUTOMATION",
      title: "Intelligent WhatsApp & Workflow Systems",
      subtitle: "Autonomous conversational commerce and real-time backend pipelines",
      desc: "Transform India’s primary communication layer into your highest-converting sales and operations machine. Direct WhatsApp API integrations that qualify leads, issue invoices, reconcile orders, and update backends 24/7.",
      highlights: [
        "Instant conversational lead capture & automated qualification",
        "Document & invoice parsing via OCR and structured LLM extraction",
        "Real-time ERP and CRM bidirectional data synchronization",
        "Zero human latency with transparent executive audit trails",
      ],
      icon: Zap,
    },
    {
      num: "III",
      tag: "INFRASTRUCTURE",
      title: "Custom Internal Systems (ERP & CRM)",
      subtitle: "Private operational hubs designed around your unique business rules",
      desc: "Stop forcing your team to fit rigid third-party software. We construct centralized management dashboards tailored to your inventory dynamics, distributor networks, team commissions, and financial metrics.",
      highlights: [
        "Custom billing, dispatch, and inventory control engines",
        "Executive oversight boards with live margin analysis",
        "Migrate seamlessly away from manual Excel spreadsheets",
        "Dedicated private cloud deployment on AWS or Google Cloud",
      ],
      icon: Database,
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Blueprint & Systems Audit",
      timeline: "48 Hours",
      description:
        "We dissect your existing operational friction, map high-leverage bottlenecks, and deliver an exact architectural specification and delivery roadmap.",
    },
    {
      step: "02",
      title: "High-Cadence Sprint Engineering",
      timeline: "Weekly Milestones",
      description:
        "Every 7 days, you test working, production-grade software on private staging environments. Full transparency with direct founder interaction at every milestone.",
    },
    {
      step: "03",
      title: "Deployment & Continuing Stewardship",
      timeline: "Production SLA",
      description:
        "Seamless cloud deployment, zero-downtime migration, and proactive performance engineering to ensure your systems scale effortlessly.",
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
    <div className="luxury-canvas min-h-screen text-[#F4F6FB] relative pb-28 sm:pb-16 overflow-x-hidden">
      {/* Precision Architectural Dot Pattern */}
      <div className="fixed inset-0 architectural-fine-grid opacity-35 pointer-events-none z-0" />

      {/* Kinetic Ambient Lighting Glows */}
      <div className="fixed -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[35%] -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed top-[70%] -left-40 w-[600px] h-[600px] bg-blue-700/12 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 1. STICKY GLASS HEADER */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#08090E]/80 hairline-b transition-all">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative z-10">
          {/* Studio Brandmark with Enlarged Colored Logo */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/logo-colored.png"
                alt="EternaTech Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-editorial text-2xl sm:text-3xl tracking-[0.08em] text-white font-light uppercase leading-none">
                  EternaTech
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[10px] tracking-[0.24em] text-cyan-400/90 uppercase font-sans font-medium mt-1">
                Software &amp; Intelligence Studio
              </span>
            </div>
          </a>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs tracking-wider text-slate-400 uppercase font-mono">
              NCR · Global
            </span>
            <a
              href="#contact"
              className="text-xs sm:text-sm tracking-[0.06em] px-5 py-2.5 rounded-full font-medium uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 active:scale-[0.98]"
            >
              Consult Studio
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* 2. HERO SECTION — AWWWARDS-GRADE VISUAL IMPACT */}
        <section className="pt-16 sm:pt-24 pb-16 sm:pb-24 text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-blue-950/40 backdrop-blur-md shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-cyan-200 font-mono font-medium">
              Accepting Select Q4 / Q1 Builds · NCR &amp; Global
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-light tracking-[-0.02em] leading-[1.05] text-white mb-6 max-w-4xl mx-auto"
          >
            Custom Apps &amp; AI Systems{" "}
            <span className="italic font-normal text-hero-gradient">
              Engineered for Scale.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light"
          >
            We replace slow, manual operations with bespoke web platforms,
            mobile applications, and intelligent WhatsApp &amp; backend automations.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-14"
          >
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-cyan-200" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-blue-400/30 hover:border-cyan-400/60 text-slate-200 hover:text-white text-sm tracking-wide bg-[#0E1320]/60 backdrop-blur-md transition-all"
            >
              <span>Explore Capabilities</span>
            </a>
          </motion.div>

          {/* 2.5D Operational Blueprint Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="luxury-card-elevated rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto text-left relative overflow-hidden mb-14 group"
          >
            {/* Ambient Backlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 hairline-b mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-editorial text-lg tracking-wide text-white">
                  Realtime Architecture Pipeline
                </span>
              </div>
              <span className="text-[11px] tracking-[0.16em] uppercase text-cyan-400 font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30">
                ACTIVE DATAFLOW
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#090D18]/90 border border-blue-500/20">
                <div className="text-[10px] tracking-widest uppercase text-slate-400 font-mono mb-1.5">
                  01 · Ingestion
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Customer &amp; Field Intake
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  WhatsApp Cloud API, Custom Partner Portals &amp; Webhooks.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-b from-blue-950/80 to-[#0A0E1A]/90 border border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.18)]">
                <div className="text-[10px] tracking-widest uppercase text-cyan-300 font-mono mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:10s]" />
                  <span>02 · EternaTech AI Core</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Autonomous Processing
                </div>
                <div className="text-xs text-cyan-200/80 leading-relaxed font-mono">
                  Vision OCR parsing, dynamic quotes, and structured ledger entries.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#090D18]/90 border border-blue-500/20">
                <div className="text-[10px] tracking-widest uppercase text-slate-400 font-mono mb-1.5">
                  03 · Execution
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  ERP &amp; Invoicing Sync
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Sub-350ms latency across databases, bank gateways, and dispatches.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Understated Proof Strip */}
          <div className="grid grid-cols-3 gap-4 pt-8 hairline-t max-w-2xl mx-auto text-center font-mono">
            <div>
              <div className="font-editorial text-2xl sm:text-4xl font-light text-white">
                &lt; 14 Days
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1 font-medium">
                Rapid MVP Deploy
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-4xl font-light text-cyan-400">
                24 / 7
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1 font-medium">
                Automated Ops
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-4xl font-light text-white">
                100%
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1 font-medium">
                Direct Leadership
              </div>
            </div>
          </div>
        </section>

        {/* 3. REPRESENTATIVE CASE DEPLOYMENTS */}
        <section className="py-20 hairline-t">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono font-medium block mb-2">
              Representative Case Deployments
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white">
              Proven Systems in Production
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
              Architected for ambitious enterprises that value high leverage and zero bloated SaaS licenses.
            </p>
          </div>

          <div className="space-y-6">
            {architecturalWorks.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card rounded-2xl p-7 sm:p-9 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-cyan-400 font-mono font-semibold">
                      {work.client}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {work.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-cyan-200 px-3.5 py-1.5 rounded-full border border-cyan-400/35 bg-blue-950/60 shadow-[0_0_15px_rgba(56,189,248,0.2)] self-start sm:self-auto">
                    {work.metric}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-light">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 hairline-t">
                  {work.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] tracking-wider uppercase font-mono text-slate-300 px-3 py-1 rounded-lg bg-[#0E1322] border border-blue-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. THE BOTTLENECK / THE SHIFT */}
        <section className="py-20 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono font-medium block mb-2">
              The Architecture Shift
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white">
              Legacy workflows silently tax your growth.
            </h2>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-slate-500">01</span>
                  <span className="text-xs text-rose-400/80 line-through">
                    Scattered Excel sheets &amp; unlogged WhatsApp chats
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal">
                  Unified Custom Web &amp; Mobile Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light leading-relaxed">
                  Single source of truth with tailored interfaces for staff, partners, and customers.
                </p>
              </div>
              <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-cyan-300 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-blue-950/60 whitespace-nowrap">
                Zero Leakage
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="luxury-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-cyan-400">02</span>
                  <span className="text-xs text-rose-400/80 line-through">
                    Manual follow-ups, lost leads &amp; delayed invoicing
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal">
                  24/7 AI &amp; WhatsApp Workflow Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light leading-relaxed">
                  Customer intake, immediate quoting, and payment reconciliations executed in seconds.
                </p>
              </div>
              <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-cyan-300 px-3.5 py-1 rounded-full border border-cyan-400/40 bg-blue-900/40 whitespace-nowrap">
                Sub-Second Velocity
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-slate-500">03</span>
                  <span className="text-xs text-rose-400/80 line-through">
                    Six-month agency delays with black-box communication
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal">
                  Rapid, Production-Grade Engineering
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light leading-relaxed">
                  Direct senior craftsmanship with tangible working releases delivered every 7 days.
                </p>
              </div>
              <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-cyan-300 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-blue-950/60 whitespace-nowrap">
                Weekly Cadence
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. CORE CAPABILITIES */}
        <section id="capabilities" className="py-20 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono font-medium block mb-2">
              Capabilities &amp; Specializations
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white">
              What We Construct
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
              We engineer bespoke software assets tailored to your business model.
            </p>
          </div>

          <div className="space-y-8">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="luxury-card rounded-2xl p-7 sm:p-10 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-editorial text-2xl sm:text-3xl text-cyan-400 font-normal">
                      {item.num}.
                    </span>
                    <span className="text-[11px] tracking-[0.2em] uppercase font-mono text-cyan-200 px-3 py-1 rounded-full border border-cyan-400/30 bg-blue-950/50">
                      {item.tag}
                    </span>
                  </div>
                  <item.icon className="w-5 h-5 text-cyan-400/60 group-hover:text-cyan-300 transition-colors" />
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-1">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm text-cyan-300 mb-4 font-light italic">
                  {item.subtitle}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 hairline-t">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. EXECUTION METHODOLOGY */}
        <section className="py-20 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono font-medium block mb-2">
              Execution Methodology
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white">
              How We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card rounded-2xl p-6 sm:p-8 relative"
              >
                <div className="font-editorial text-3xl sm:text-4xl font-light text-cyan-400 mb-3">
                  {m.step}.
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal mb-1">
                  {m.title}
                </h3>
                <div className="text-[11px] tracking-[0.16em] uppercase text-cyan-300 font-mono mb-3 font-medium">
                  {m.timeline}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono font-medium block mb-2">
              Clarity &amp; Terms
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="luxury-card rounded-xl overflow-hidden border border-blue-500/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-editorial text-lg sm:text-xl text-white font-normal">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed hairline-t pt-3"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FOUNDER & DIRECT CONTACT */}
        <section id="contact" className="py-20 hairline-t">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="luxury-card-elevated rounded-3xl p-7 sm:p-12 text-center max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Direct Consultation Emblem */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5">
              <Image
                src="/logo-colored.png"
                alt="EternaTech"
                width={80}
                height={80}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              />
            </div>

            <div className="text-[11px] tracking-[0.24em] uppercase text-cyan-400 font-mono mb-2 font-medium">
              Private Consultation
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white mb-2">
              Shashwat Manu
            </h2>
            <div className="text-xs sm:text-sm tracking-wider uppercase font-mono text-slate-400 mb-6">
              Founder &amp; Technical Director · EternaTech
            </div>

            <p className="text-sm sm:text-base text-slate-300 italic font-light leading-relaxed max-w-lg mx-auto mb-10">
              &ldquo;We partner selectively with ambitious founders and leadership teams who value senior engineering rigor, clean codebases, and direct execution over agency bureaucracy.&rdquo;
            </p>

            {/* Direct Contact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8">
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <MessageCircle className="w-4 h-4 text-cyan-200" />
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={CALL_PRIMARY}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-blue-400/40 hover:border-cyan-400 text-slate-200 hover:text-white text-xs sm:text-sm tracking-wider uppercase transition-all bg-[#0A0E1A]/60"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 78277 75679</span>
              </a>

              <a
                href={EMAIL_PRIMARY}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs sm:text-sm tracking-wider uppercase transition-all bg-[#0A0E1A]/60"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email Studio</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 tracking-wider uppercase font-mono pt-6 hairline-t">
              Based in Delhi NCR &amp; Ghaziabad, India · Serving Clients Globally
            </div>
          </motion.div>
        </section>
      </main>

      {/* 9. FLOATING CONCIERGE DOCK FOR MOBILE */}
      <aside className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <div className="luxury-card-elevated rounded-full p-2.5 pl-3.5 flex items-center justify-between shadow-2xl border border-cyan-400/35 backdrop-blur-2xl">
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
              <span className="font-editorial text-base text-white leading-none">
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
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </aside>

      {/* 10. MINIMALIST FOOTER */}
      <footer className="hairline-t py-8 px-5 sm:px-8 text-center text-xs text-slate-400 relative z-10 font-mono">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-light">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <Image
                src="/logo-colored.png"
                alt="EternaTech"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span>© 2026 EternaTech · Ghaziabad / Delhi NCR, India · eternatech.in</span>
          </div>
          <div className="text-[11px] text-cyan-400/90 tracking-widest uppercase">
            Bespoke Engineering &amp; Artificial Intelligence
          </div>
        </div>
      </footer>
    </div>
  );
}
