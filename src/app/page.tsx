"use client";

import React, { useState } from "react";
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
    },
    {
      title: "Unified Logistics & Driver Fleet Portal",
      client: "Supply Chain Conglomerate",
      metric: "4.2x Faster Dispatch",
      description:
        "Bespoke mobile dispatch web app with offline-first synchronization, automated trip manifests, and GPS-stamped delivery verification replacing 60+ legacy Excel logs.",
      tags: ["Mobile PWA", "Cloudflare Workers", "Realtime Sync"],
    },
    {
      title: "Automated Document OCR & Ledger Sync",
      client: "Private Manufacturing & Export",
      metric: "320ms Extraction Time",
      description:
        "Intelligent multi-lingual invoice and tax document parser wiring vendor WhatsApp submissions directly into central financial ledgers with 99.8% precision.",
      tags: ["Vision LLM", "Custom ERP", "Zero SaaS Licensing"],
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
    <div className="luxury-canvas min-h-screen text-[#EDE8DF] relative pb-28 sm:pb-16 overflow-x-hidden">
      {/* Architectural Atmospheric Texture Layers */}
      <div className="fixed inset-0 architectural-fine-grid opacity-35 pointer-events-none z-0" />

      {/* Warm Ambient Radial Halos */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[45%] -right-48 w-[500px] h-[500px] bg-[#916F2C]/08 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-0 -left-48 w-[600px] h-[600px] bg-[#C5A059]/07 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* 1. EDITORIAL HEADER */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0B0A08]/85 hairline-b transition-all">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between relative z-10">
          {/* Studio Wordmark with Custom Monogram Emblem */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-8 h-8 rounded-lg border border-[#C5A059]/35 bg-[#171511] flex items-center justify-center text-[#E8D5A7] font-editorial text-sm font-semibold shadow-inner group-hover:border-[#C5A059] transition-all">
              ET
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl tracking-[0.12em] text-[#F7F3EB] font-light uppercase">
                EternaTech
              </span>
              <span className="text-[9px] tracking-[0.24em] text-[#C5A059] uppercase font-sans font-medium -mt-0.5">
                Software &amp; Systems Studio
              </span>
            </div>
          </a>

          {/* Direct Private Action */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs tracking-wider text-[#968F84] uppercase font-medium">
              NCR · Global
            </span>
            <a
              href="#contact"
              className="text-xs sm:text-sm tracking-[0.08em] px-4 py-2 sm:px-5 sm:py-2 rounded-full border border-[#C5A059]/40 text-[#E8D5A7] hover:bg-[#C5A059]/10 hover:border-[#C5A059] transition-all font-medium uppercase shadow-sm"
            >
              Consult Studio
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* 2. HERO SECTION — LUXURY EDITORIAL STATEMENT */}
        <section className="pt-14 sm:pt-24 pb-16 sm:pb-24 text-center">
          {/* Subtle status ornament with crest styling */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#161410]/80 backdrop-blur-md shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#E8D5A7] font-medium">
              Accepting Select Q4 / Q1 Commissions
            </span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.02em] leading-[1.08] text-[#F7F3EB] mb-6 max-w-3xl mx-auto"
          >
            Custom Apps &amp; AI Systems{" "}
            <span className="italic font-normal text-gold-gradient">
              Engineered for Scale.
            </span>
          </motion.h1>

          {/* Editorial Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#B3ACA0] leading-relaxed max-w-2xl mx-auto mb-10 font-light"
          >
            We replace slow, manual operations with bespoke web platforms,
            mobile applications, and intelligent WhatsApp &amp; backend automations.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-14"
          >
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D8B467] hover:from-[#D4AF37] hover:to-[#E8D5A7] text-[#0B0A08] font-semibold text-sm tracking-wide shadow-lg shadow-[#C5A059]/20 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#968F84]/35 hover:border-[#C5A059]/60 text-[#EDE8DF] text-sm tracking-wide bg-[#14120E]/50 backdrop-blur-sm transition-all"
            >
              <span>Explore Capabilities</span>
            </a>
          </motion.div>

          {/* Interactive Simulated Architecture Visual (Warm Editorial Canvas) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="luxury-card-elevated rounded-2xl p-5 sm:p-7 max-w-2xl mx-auto text-left relative overflow-hidden mb-14"
          >
            <div className="flex items-center justify-between pb-3.5 hairline-b mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span className="font-editorial text-sm tracking-wide text-[#E8D5A7]">
                  Operational Blueprint Simulation
                </span>
              </div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#968F84] font-mono">
                Realtime Dataflow
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0F0E0B] border border-[#C5A059]/15">
                <div className="text-[10px] tracking-wider uppercase text-[#8F8A81] mb-1">
                  Input Stream
                </div>
                <div className="text-xs font-medium text-[#F7F3EB] mb-1">
                  Customer &amp; Partner Inquiries
                </div>
                <div className="text-[10px] text-[#C5A059]">
                  WhatsApp · Portals · Web APIs
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1A1813] border border-[#C5A059]/35 shadow-inner">
                <div className="text-[10px] tracking-wider uppercase text-[#E8D5A7] mb-1 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#C5A059]" />
                  <span>EternaTech AI Core</span>
                </div>
                <div className="text-xs font-medium text-[#F7F3EB] mb-1">
                  Realtime Parser &amp; Router
                </div>
                <div className="text-[10px] text-[#E8D5A7]">
                  OCR · Validation · Automated Ledgers
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F0E0B] border border-[#C5A059]/15">
                <div className="text-[10px] tracking-wider uppercase text-[#8F8A81] mb-1">
                  Target Outcome
                </div>
                <div className="text-xs font-medium text-[#F7F3EB] mb-1">
                  Synced ERP &amp; Instant Invoicing
                </div>
                <div className="text-[10px] text-[#C5A059]">
                  Sub-350ms · Zero Manual Labor
                </div>
              </div>
            </div>
          </motion.div>

          {/* Understated Proof Strip */}
          <div className="grid grid-cols-3 gap-4 pt-8 hairline-t max-w-xl mx-auto text-center">
            <div>
              <div className="font-editorial text-2xl sm:text-3xl font-light text-[#F7F3EB]">
                &lt; 14 Days
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#968F84] mt-1 font-medium">
                Rapid MVP Deploy
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-3xl font-light text-[#C5A059]">
                24 / 7
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#968F84] mt-1 font-medium">
                Automated Ops
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-3xl font-light text-[#F7F3EB]">
                100%
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#968F84] mt-1 font-medium">
                Direct Leadership
              </div>
            </div>
          </div>
        </section>

        {/* 3. SELECTED ARCHITECTURAL WORKS (Real tangible proofs) */}
        <section className="py-16 sm:py-24 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] font-medium block mb-2">
              Representative Case Deployments
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F7F3EB]">
              Proven Systems in Production
            </h2>
            <p className="text-sm text-[#A39D93] mt-2 font-light">
              Architected for Indian enterprises scaling their operations with zero bloated SaaS licenses.
            </p>
          </div>

          <div className="space-y-5">
            {architecturalWorks.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card rounded-2xl p-6 sm:p-8 hover:border-[#C5A059]/40 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#C5A059] font-medium">
                      {work.client}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3EB] font-normal">
                      {work.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-[#E8D5A7] px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 self-start sm:self-auto">
                    {work.metric}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#B3ACA0] leading-relaxed mb-4 font-light">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 hairline-t">
                  {work.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] tracking-wider uppercase text-[#8F8A81] px-2.5 py-0.5 rounded bg-[#161410] border border-[#C5A059]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. THE ARCHITECTURAL SHIFT (Problem vs Resolution) */}
        <section className="py-16 sm:py-24 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] font-medium block mb-2">
              The Architecture Shift
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F7F3EB]">
              Legacy workflows silently tax your growth.
            </h2>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-[#8F8A81] tracking-wider">01</span>
                  <span className="text-xs text-[#8F8A81] line-through">
                    Scattered Excel sheets &amp; unlogged WhatsApp chats
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3EB] font-normal">
                  Unified Custom Web &amp; Mobile Portals
                </h3>
                <p className="text-xs sm:text-sm text-[#A39D93] mt-1 font-light leading-relaxed">
                  Single source of truth with tailored interfaces for staff, partners, and customers.
                </p>
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#C5A059] px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 whitespace-nowrap">
                Zero Data Loss
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="luxury-card-elevated rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-[#C5A059] tracking-wider">02</span>
                  <span className="text-xs text-[#8F8A81] line-through">
                    Manual follow-ups, lost leads &amp; delayed invoicing
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3EB] font-normal">
                  24/7 AI &amp; WhatsApp Workflow Automation
                </h3>
                <p className="text-xs sm:text-sm text-[#A39D93] mt-1 font-light leading-relaxed">
                  Customer intake, immediate quoting, and payment reconciliations executed in seconds.
                </p>
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#C5A059] px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 whitespace-nowrap">
                Sub-Second Velocity
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-[#8F8A81] tracking-wider">03</span>
                  <span className="text-xs text-[#8F8A81] line-through">
                    Six-month agency delays with black-box communication
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3EB] font-normal">
                  Rapid, Production-Grade Engineering
                </h3>
                <p className="text-xs sm:text-sm text-[#A39D93] mt-1 font-light leading-relaxed">
                  Direct senior craftsmanship with tangible working releases delivered every 7 days.
                </p>
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#C5A059] px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 whitespace-nowrap">
                Weekly Cadence
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. CORE CAPABILITIES (Refined Editorial Suites) */}
        <section id="capabilities" className="py-16 sm:py-24 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] font-medium block mb-2">
              Capabilities &amp; Specializations
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F7F3EB]">
              What We Construct
            </h2>
            <p className="text-sm text-[#A39D93] mt-3 font-light">
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
                className="luxury-card rounded-2xl p-7 sm:p-10 relative overflow-hidden group hover:border-[#C5A059]/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-editorial text-2xl text-[#C5A059] font-normal">
                      {item.num}.
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8D5A7] px-2.5 py-0.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EB] font-normal mb-1">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm text-[#C5A059] mb-4 font-light italic">
                  {item.subtitle}
                </div>
                <p className="text-sm text-[#A39D93] leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 hairline-t">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#EDE8DF]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. HOW WE BUILD (The Execution Methodology) */}
        <section className="py-16 sm:py-24 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] font-medium block mb-2">
              Execution Methodology
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F7F3EB]">
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
                className="luxury-card rounded-2xl p-6 sm:p-7 relative"
              >
                <div className="font-editorial text-3xl font-light text-[#C5A059] mb-3">
                  {m.step}.
                </div>
                <h3 className="font-editorial text-xl text-[#F7F3EB] font-normal mb-1">
                  {m.title}
                </h3>
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#C5A059] mb-3 font-medium">
                  {m.timeline}
                </div>
                <p className="text-xs sm:text-sm text-[#A39D93] leading-relaxed font-light">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. COMMON QUESTIONS (Refined Accordion) */}
        <section className="py-16 sm:py-20 hairline-t">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] font-medium block mb-2">
              Clarity &amp; Terms
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#F7F3EB]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="luxury-card rounded-xl overflow-hidden border border-[#C5A059]/15"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-editorial text-lg sm:text-xl text-[#F7F3EB] font-normal">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 shrink-0 ${
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
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#A39D93] font-light leading-relaxed hairline-t pt-3"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FOUNDER & DIRECT CONTACT (High-Trust Editorial Card) */}
        <section id="contact" className="py-16 sm:py-24 hairline-t">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="luxury-card-elevated rounded-3xl p-7 sm:p-12 text-center max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Subtle corner ornament */}
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#C5A059] mb-4 font-medium">
              Private Consultation
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F7F3EB] mb-2">
              Shashwat Manu
            </h2>
            <div className="text-xs sm:text-sm tracking-wider uppercase text-[#968F84] mb-6 font-medium">
              Founder &amp; Technical Director · EternaTech
            </div>

            <p className="text-sm sm:text-base text-[#C2BCB0] italic font-light leading-relaxed max-w-lg mx-auto mb-10">
              &ldquo;We partner selectively with ambitious founders and leadership teams who value senior engineering rigor, clean codebases, and direct execution over agency bureaucracy.&rdquo;
            </p>

            {/* Direct Contact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D8B467] hover:from-[#D4AF37] hover:to-[#E8D5A7] text-[#0B0A08] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={CALL_PRIMARY}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] text-[#EDE8DF] text-xs sm:text-sm tracking-wider uppercase transition-all bg-[#161410]/60"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+91 78277 75679</span>
              </a>

              <a
                href={EMAIL_PRIMARY}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#968F84]/30 hover:border-[#C5A059]/40 text-[#EDE8DF] text-xs sm:text-sm tracking-wider uppercase transition-all bg-[#161410]/60"
              >
                <Mail className="w-4 h-4 text-[#968F84]" />
                <span>Email Studio</span>
              </a>
            </div>

            <div className="text-[11px] text-[#968F84] tracking-wider uppercase pt-6 hairline-t">
              Based in Delhi NCR &amp; Ghaziabad, India · Serving Clients Globally
            </div>
          </motion.div>
        </section>
      </main>

      {/* 9. FLOATING CONCIERGE DOCK FOR MOBILE */}
      <aside className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <div className="luxury-card-elevated rounded-full p-2.5 pl-4 flex items-center justify-between shadow-2xl border border-[#C5A059]/40 backdrop-blur-2xl">
          <div className="flex flex-col">
            <span className="font-editorial text-sm text-[#F7F3EB] leading-none">
              EternaTech
            </span>
            <span className="text-[9px] text-[#C5A059] tracking-wider uppercase mt-0.5">
              Available Q4/Q1
            </span>
          </div>

          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D8B467] text-[#0B0A08] text-xs font-semibold tracking-wide shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </aside>

      {/* 10. MINIMALIST FOOTER */}
      <footer className="hairline-t py-8 px-5 sm:px-8 text-center text-xs text-[#968F84] relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-light">
          <div>
            © 2026 EternaTech · Ghaziabad / Delhi NCR, India · eternatech.in
          </div>
          <div className="text-[11px] text-[#C5A059]/80 tracking-widest uppercase">
            Bespoke Engineering &amp; Artificial Intelligence
          </div>
        </div>
      </footer>
    </div>
  );
}
