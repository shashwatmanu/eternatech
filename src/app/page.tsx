"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ChevronDown,
  Layers,
  Zap,
  BarChart2,
  Users,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Smartphone,
  Database,
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver for reveal animation
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, []);

  const tabContent = [
    {
      title: "Omnichannel WhatsApp & AI Engines",
      badge: "Automation Core",
      subtitle: "Instant lead qualification and 24/7 business operations on WhatsApp.",
      icon: MessageSquare,
      iconColor: "#0284C7",
      bgColor: "#E0F2FE",
      desc: "Connect your inbound customer chats directly into automated CRM workflows, order processing, and payment collection with zero human lag.",
      bullets: [
        "Official Meta Cloud API with high-throughput template routing",
        "Context-aware AI replies trained on your pricing & catalog",
        "Automated UPI payments, digital invoices, and dispatch alerts",
        "Instant escalations to human agents when high intent is detected",
      ],
      stats: { primary: "100%", label: "Lead Response Rate", secondary: "< 3 sec" },
      mockupType: "whatsapp",
    },
    {
      title: "Bespoke Web & Mobile Platforms",
      badge: "High-Performance Apps",
      subtitle: "Production Next.js, React Native, and cloud native architectures.",
      icon: Layers,
      iconColor: "#D97706",
      bgColor: "#FEF3C7",
      desc: "Clean, ultra-fast web platforms built with Next.js App Router and React Native. Sub-second page loads, enterprise security, and 100% IP ownership.",
      bullets: [
        "Clean server-side rendering with 99+ Google Lighthouse scores",
        "Cross-platform iOS and Android builds with shared logic",
        "Zero per-seat licensing fees — full unencumbered code rights",
        "Automated CI/CD pipelines deployed to your own AWS/GCP cloud",
      ],
      stats: { primary: "99+", label: "Lighthouse Performance", secondary: "Zero Latency" },
      mockupType: "web-app",
    },
    {
      title: "Custom Operational ERPs & Analytics",
      badge: "Internal Tooling",
      subtitle: "Replace fragile spreadsheets with unified internal software.",
      icon: BarChart2,
      iconColor: "#059669",
      bgColor: "#D1FAE5",
      desc: "Tailored dashboards, warehouse inventory tracking, field-force monitoring, and real-time ledger sync built to eliminate hours of manual data entry.",
      bullets: [
        "Custom role-based permissions (Admin, Finance, Field Ops)",
        "Automated sync with Tally, Delhivery, Razorpay, and Shiprocket",
        "Live financial analytics with warm visual data clarity",
        "Daily automated executive digests on Telegram and WhatsApp",
      ],
      stats: { primary: "14 hrs/wk", label: "Manual Work Eliminated", secondary: "99.9% Uptime" },
      mockupType: "erp",
    },
  ];

  const pricingPlans = [
    {
      name: "Sprint MVP",
      type: "basic",
      description: "For founders validating a new concept or launching a rapid mobile/web product.",
      priceMonthly: "₹95,000",
      priceYearly: "₹75,000",
      period: "/ sprint",
      popular: false,
      features: [
        "Full-stack Next.js or React Native MVP",
        "Delivered & deployed in under 14 days",
        "Core database & Auth setup (Supabase / Postgres)",
        "Payment gateway (Razorpay / Stripe) integration",
        "100% intellectual property & code ownership",
        "14-day post-launch warranty & bug fixes",
      ],
      buttonText: "Schedule Discovery",
      ctaLink: "https://wa.me/917827775679?text=Hi%20Shashwat,%20I'm%20interested%20in%20the%20Sprint%20MVP%20package%20for%20EternaTech.",
    },
    {
      name: "Scale Engine",
      type: "popular",
      description: "Our signature engagement. Complete custom engineering, WhatsApp automations, and ERP.",
      priceMonthly: "₹1,85,000",
      priceYearly: "₹1,45,000",
      period: "/ engagement",
      popular: true,
      features: [
        "Production Web App + Mobile iOS/Android app",
        "Meta Verified WhatsApp Cloud Bot with AI qualification",
        "Custom Internal Admin / Operational ERP dashboard",
        "Third-party integrations (CRM, Tally, Logistics)",
        "Dedicated senior tech lead & bi-weekly sprints",
        "Automated CI/CD, backup regimes & cloud setup",
        "45-day post-launch warranty & hypercare support",
      ],
      buttonText: "Start a Conversation",
      ctaLink: "https://wa.me/917827775679?text=Hi%20Shashwat,%20I'd%20like%20to%20discuss%20the%20Scale%20Engine%20for%20our%20company.",
    },
    {
      name: "Enterprise Studio",
      type: "pro",
      description: "For established businesses needing dedicated engineering teams and complex transformations.",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      period: "flexible scope",
      popular: false,
      features: [
        "Dedicated full-stack engineering team pods",
        "Complex legacy software & ERP modernization",
        "Custom self-hosted LLM & AI fine-tuning",
        "High-compliance data architecture (SOC2 / HIPAA ready)",
        "Guaranteed 4-hour SLA with direct founder access",
        "Quarterly roadmap steering & code audits",
      ],
      buttonText: "Talk to Founder",
      ctaLink: "https://wa.me/917827775679?text=Hi%20Shashwat,%20let's%20discuss%20an%20Enterprise%20custom%20software%20engagement.",
    },
  ];

  const testimonials = [
    {
      company: "Elev8 Solar Technologies",
      quote: "EternaTech completely modernized our dealer onboarding and operational portal. Our dealer turnaround dropped from 48 hours to under 20 minutes.",
      author: "Aditya Sharma",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      company: "FleetRoute Logistics",
      quote: "The bespoke dispatch ERP and WhatsApp driver tracking system saved us over 18 hours of manual phone coordination every single day.",
      author: "Karan Malhotra",
      role: "VP of Logistics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      company: "Aura Dental Clinics",
      quote: "Our patient appointments and follow-up reminders run completely on autopilot via WhatsApp. Zero missed appointments this quarter.",
      author: "Dr. Rohini Mehta",
      role: "Chief of Clinical Ops",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    {
      company: "NexGen Financial Advisory",
      quote: "Unlike agencies that deliver templates and disappear, Shashwat and his team wrote pristine code and handed over full IP without fuss.",
      author: "Siddharth Jain",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      company: "VentureCraft Studio",
      quote: "We brought them in to rescue a stalled React Native build. They audited, stabilized, and shipped it to the App Store in 12 days flat.",
      author: "Pooja Varma",
      role: "Head of Product",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    {
      company: "UrbanSpaces Realty",
      quote: "Their lead intake system filters genuine high-ticket buyers and delivers verified site visit bookings straight to our sales WhatsApp.",
      author: "Rohan Singhal",
      role: "Director of Acquisitions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const faqs = [
    {
      q: "How does EternaTech differ from a typical web agency?",
      a: "We are an engineering-led studio, not a WordPress or template shop. We write clean, bespoke software in modern stacks (Next.js, Node, React Native, Python). You get direct access to senior engineers and founders, 100% intellectual property ownership, and clean architecture built for high scale.",
    },
    {
      q: "How fast can you deliver an initial production MVP?",
      a: "Our Sprint MVP engagements typically ship in 10 to 14 calendar days. For larger custom platforms or complete company ERPs with WhatsApp automations, deployments take between 4 to 8 weeks with continuous weekly staging demos.",
    },
    {
      q: "Do we own the source code and infrastructure?",
      a: "Yes, 100%. All source code, Git repositories, AWS/GCP cloud environments, and database credentials are fully transferred to your company upon project completion. There are zero vendor lock-ins and zero recurring seat fees from our side.",
    },
    {
      q: "Can you integrate with our existing accounting or logistics tools?",
      a: "Yes. We build custom API bridges for Tally, Busy, SAP, Zoho, Razorpay, Cashfree, Shiprocket, Delhivery, Salesforce, and custom SQL databases so your existing data flows seamlessly.",
    },
    {
      q: "What does post-launch support look like?",
      a: "Every engagement includes 14 to 45 days of included post-launch hypercare warranty. Following launch, we offer optional monthly engineering retainer packages for ongoing feature roadmaps, security updates, and performance tuning.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      {/* Decorative vertical dashed lines per SKILL.md */}
      <div className="dashed-line hidden xl:block" style={{ left: "calc(50% - 600px)" }} />
      <div className="dashed-line hidden xl:block" style={{ right: "calc(50% - 600px)" }} />

      {/* ========================================================= */}
      {/* STEP 2 — NAVBAR                                          */}
      {/* ========================================================= */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b ${
          scrolled ? "border-[var(--border)] scrolled" : "border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo with explicit branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Image
                src="/logo-colored.png"
                alt="EternaTech Logo"
                width={36}
                height={36}
                priority
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[17px] tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                EternaTech
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[var(--text-muted)] -mt-1">
                Studio
              </span>
            </div>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--text-secondary)]">
            <a href="#capabilities" className="hover:text-[var(--text-primary)] transition-colors">
              Capabilities
            </a>
            <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">
              Platforms
            </a>
            <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors">
              Engagements
            </a>
            <a href="#testimonials" className="hover:text-[var(--text-primary)] transition-colors">
              Proof
            </a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">
              FAQ
            </a>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917827775679?text=Hi%20Shashwat,%20I'd%20like%20to%20discuss%20a%20project%20with%20EternaTech."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              <span>Book Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* STEP 3 — HERO SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Soft radial glow behind hero */}
        <div className="hero-glow" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          {/* Announcement pill badge */}
          <div className="badge mb-6 reveal">
            <div className="badge-dot" />
            <span>Accepting Q4/Q1 Engineering Engagements · Delhi NCR & Global</span>
          </div>

          {/* Large serif H1 (Playfair Display) */}
          <h1
            className="text-[40px] sm:text-[54px] lg:text-[68px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--text-primary)] max-w-[940px] mb-6 reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Custom Apps & AI Systems Engineered for Scale.
          </h1>

          {/* Subtext (Inter) */}
          <p
            className="text-[17px] sm:text-[19px] leading-[1.65] text-[var(--text-secondary)] max-w-[560px] mb-8 reveal"
            style={{ transitionDelay: "140ms" }}
          >
            We replace sluggish, manual operations with bespoke web platforms, mobile apps, and intelligent WhatsApp automations that run on autopilot.
          </p>

          {/* Primary CTA + Secondary CTA */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20 reveal"
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href="https://wa.me/917827775679?text=Hi%20Shashwat,%20I'd%20like%20to%20start%20a%20project%20conversation%20with%20EternaTech."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="btn-ghost w-full sm:w-auto justify-center">
              <span>View Capabilities</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Three Floating Realistic UI Mockup Cards (SKILL.md Step 3 & Step 10) */}
          <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Card: Live WhatsApp Order Intake (-1.5deg tilt) */}
            <div className="hero-card bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-5 text-left shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">WhatsApp AI Engine</span>
                </div>
                <span className="text-[11px] font-mono font-medium text-[var(--text-muted)]">Live · Meta Cloud</span>
              </div>

              {/* Chat snippet */}
              <div className="space-y-2.5 text-xs mb-4">
                <div className="bg-[var(--bg-subtle)] p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)] block mb-1">Customer (NCR):</span>
                  &ldquo;Need 500 units of SKU-A4 dispatched to Gurgaon warehouse by Friday.&rdquo;
                </div>
                <div className="bg-[var(--accent-light)] p-2.5 rounded-lg border border-[#BAE6FD] text-[var(--accent)] font-medium">
                  <div className="flex items-center gap-1.5 mb-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Automated Dispatch</span>
                  </div>
                  Inventory verified. PO #7892 generated. Invoice sent for instant UPI approval.
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] text-[11px]">
                <span className="text-[var(--text-muted)]">Fulfillment Status</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Auto-Synced to Tally
                </span>
              </div>
            </div>

            {/* Center Main Card: Throughput & ARR with Warm Yellow Data Bars (#E8D87A) */}
            <div className="hero-card bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-6 text-left shadow-[var(--shadow-lg)] relative z-20 md:-mt-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-5">
                <div>
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    Total Gross Throughput
                  </div>
                  <div className="text-2xl font-bold font-display text-[var(--text-primary)] mt-0.5">
                    ₹ 1,48,20,500
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+34.2%</span>
                </div>
              </div>

              {/* Realistic Warm Yellow Chart Bars per SKILL.md */}
              <div className="text-xs font-medium text-[var(--text-secondary)] mb-2 flex items-center justify-between">
                <span>Monthly Automated Volume</span>
                <span className="text-[var(--text-muted)]">Q3-Q4 Performance</span>
              </div>
              <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2 pb-2 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] mb-4">
                {[
                  { m: "Jul", h: "45%" },
                  { m: "Aug", h: "62%" },
                  { m: "Sep", h: "78%" },
                  { m: "Oct", h: "92%" },
                  { m: "Nov", h: "85%" },
                  { m: "Dec", h: "100%" },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div
                      className="w-full rounded-t-sm transition-all duration-500 hover:brightness-95"
                      style={{
                        height: item.h,
                        backgroundColor: "var(--chart-bar)", // #E8D87A warm yellow per SKILL.md
                      }}
                    />
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">{item.m}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-2 rounded bg-[var(--bg-subtle)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)]">Active Orders</div>
                  <div className="font-semibold text-[var(--text-primary)]">14,280 Units</div>
                </div>
                <div className="p-2 rounded bg-[var(--bg-subtle)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)]">Avg Fulfillment</div>
                  <div className="font-semibold text-emerald-600">4.2 min</div>
                </div>
              </div>
            </div>

            {/* Right Card: Real-time Multi-channel Sync Logs (+1.5deg tilt) */}
            <div className="hero-card bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-5 text-left shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">System Operations</span>
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  99.98% OK
                </span>
              </div>

              {/* Operational log list */}
              <div className="space-y-2.5 text-xs">
                {[
                  { name: "Delhivery Surface Sync", val: "48 Shipments", status: "Processed" },
                  { name: "Razorpay Auto-Settlement", val: "₹ 3,40,000", status: "Verified" },
                  { name: "PostgreSQL Cloud Replica", val: "12ms Latency", status: "Healthy" },
                  { name: "Meta Cloud Webhook", val: "1,200 events/m", status: "Active" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded bg-[var(--bg-subtle)] border border-[var(--border)]"
                  >
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">{item.name}</div>
                      <div className="text-[10px] text-[var(--text-muted)] font-mono">{item.val}</div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-white px-2 py-0.5 rounded border border-[var(--border)]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                <span>Infrastructure: AWS Mumbai (ap-south-1)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 4 — LOGO STRIP MARQUEE                               */}
      {/* ========================================================= */}
      <section className="py-8 border-y border-[var(--border)] overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 mb-4 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-[var(--text-muted)]">
            Trusted by high-growth founders & manufacturing enterprises across NCR & Globally
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex items-center gap-16 py-2">
            {[
              "ELEV8 SOLAR",
              "FLEETROUTE",
              "AURA CLINICS",
              "NEXGEN CAPITAL",
              "URBAN SPACES",
              "VENTURE CRAFT",
              "METRO LOGISTICS",
              "APEX ENGINEERING",
              "ELEV8 SOLAR",
              "FLEETROUTE",
              "AURA CLINICS",
              "NEXGEN CAPITAL",
              "URBAN SPACES",
              "VENTURE CRAFT",
              "METRO LOGISTICS",
              "APEX ENGINEERING",
            ].map((brand, i) => (
              <div
                key={i}
                className="text-lg font-bold font-mono tracking-wider text-[var(--text-muted)] opacity-50 hover:opacity-90 transition-opacity cursor-default whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 5 — 3-UP FEATURE CARDS                               */}
      {/* ========================================================= */}
      <section id="capabilities" className="py-24 bg-[var(--bg-subtle)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Engineered for Real Business Velocity.
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)]">
              We design and ship high-leverage software assets that directly increase your operational margin and remove manual bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:border-[var(--accent)] transition-colors reveal flex flex-col justify-between">
              <div>
                <div className="h-44 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] p-4 mb-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Smartphone className="w-4 h-4 text-[var(--accent)]" /> Mobile & Web Platform
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Production Ready
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="h-2.5 bg-white rounded border border-[var(--border)] w-3/4" />
                    <div className="h-2.5 bg-white rounded border border-[var(--border)] w-full" />
                    <div className="h-2.5 bg-white rounded border border-[var(--border)] w-5/6" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 w-20 rounded bg-[var(--accent)] text-white text-[10px] font-medium flex items-center justify-center">
                      Launch App
                    </div>
                    <div className="h-7 w-16 rounded bg-white border border-[var(--border)] text-[10px] flex items-center justify-center text-[var(--text-muted)]">
                      Preview
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 font-body">
                  High-Speed Web & Mobile Platforms
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  Next.js App Router web apps and React Native iOS/Android builds tuned for sub-second speeds, zero hydration bugs, and unmatched user conversion.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center text-sm font-semibold text-[var(--accent)]">
                <span>View architecture</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:border-[var(--accent)] transition-colors reveal flex flex-col justify-between"
              style={{ transitionDelay: "80ms" }}
            >
              <div>
                <div className="h-44 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] p-4 mb-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                      <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp AI Bot
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">Meta API</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[var(--border)] text-xs text-[var(--text-secondary)] space-y-1">
                    <div className="font-semibold text-[var(--text-primary)] text-[11px]">Instant Intent Parser:</div>
                    <div className="text-[11px] text-emerald-700 font-mono">
                      Query: &ldquo;Send latest pricing catalog for dealer tier 2&rdquo;
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      ✓ Instant PDF dispatched · CRM lead marked Qualified
                    </div>
                  </div>
                  <div className="h-5 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                    <span>Response: 1.2s</span>
                    <span>Success: 99.4%</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 font-body">
                  Intelligent WhatsApp & AI Automations
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  Transform WhatsApp into a 24/7 revenue channel. Automated quotation generation, payment collection, customer support triage, and ERP sync.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center text-sm font-semibold text-[var(--accent)]">
                <span>See sample workflows</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white border border-[var(--border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:border-[var(--accent)] transition-colors reveal flex flex-col justify-between"
              style={{ transitionDelay: "160ms" }}
            >
              <div>
                <div className="h-44 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] p-4 mb-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Database className="w-4 h-4 text-amber-600" /> Custom Internal ERP
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">Postgres</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--text-muted)] block">Inventory Sync</span>
                      <span className="font-bold text-[var(--text-primary)]">99.8% Match</span>
                    </div>
                    <div className="bg-white p-2.5 rounded border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--text-muted)] block">Ledger Auto-Post</span>
                      <span className="font-bold text-emerald-600">Active</span>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-white rounded border border-[var(--border)] overflow-hidden">
                    <div className="h-full bg-[var(--chart-bar)] w-4/5" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 font-body">
                  Bespoke Operations & Cloud Tooling
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  Tailor-made software built for your exact operational workflow. Connect warehouses, field teams, sales reps, and accountants in one unified tool.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center text-sm font-semibold text-[var(--accent)]">
                <span>Explore ERP modules</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 6 — FEATURE TAB SECTION (DIAGONAL CROSSHATCH BG)     */}
      {/* ========================================================= */}
      <section id="features" className="py-24 bg-pattern relative border-y border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--accent)] block mb-2">
              Deep Dive Engineering
            </span>
            {/* Left-aligned serif H2 per SKILL.md */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] max-w-2xl text-left">
              Built on Modern Architecture, Not Fragile No-Code.
            </h2>
          </div>

          {/* Tab Navigation Bar with colored rounded-square icon boxes (28x28px) */}
          <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[var(--border)]">
            {tabContent.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white border border-[var(--border)] shadow-[var(--shadow-sm)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/60"
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs"
                    style={{ backgroundColor: tab.iconColor }}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span>{tab.badge}</span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Content Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: tabContent[activeTab].iconColor }}
                >
                  {React.createElement(tabContent[activeTab].icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {tabContent[activeTab].badge}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[var(--text-primary)]">
                    {tabContent[activeTab].title}
                  </h3>
                </div>
              </div>

              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
                {tabContent[activeTab].desc}
              </p>

              {/* Green checkmark list */}
              <div className="space-y-3 pt-2">
                {tabContent[activeTab].bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Muted caption & stat */}
              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <div>
                  <span className="text-[var(--text-primary)] font-bold text-lg block">
                    {tabContent[activeTab].stats.primary}
                  </span>
                  <span>{tabContent[activeTab].stats.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-[var(--text-primary)] font-bold text-lg block">
                    {tabContent[activeTab].stats.secondary}
                  </span>
                  <span>Benchmark</span>
                </div>
              </div>
            </div>

            {/* Right Panel: Realistic Product UI Screenshot / Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[var(--border)] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-float)]">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-[var(--text-muted)]">
                      eternatech.production.app · cloud-native
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[var(--accent)] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Enterprise Security
                  </span>
                </div>

                {/* Inner Deep Dive UI Mockup */}
                <div className="bg-[var(--bg-subtle)] rounded-xl border border-[var(--border)] p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        Operational Dashboard
                      </div>
                      <div className="text-2xl font-bold font-display text-[var(--text-primary)]">
                        Realtime Engine Health
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs font-medium">
                      <span className="px-3 py-1.5 bg-white border border-[var(--border)] rounded-md text-[var(--text-secondary)]">
                        Daily
                      </span>
                      <span className="px-3 py-1.5 bg-[var(--text-primary)] text-white rounded-md">
                        Monthly
                      </span>
                    </div>
                  </div>

                  {/* Visual Chart with warm yellow bars per rule */}
                  <div className="h-40 flex items-end justify-between gap-3 pt-6 px-4 pb-2 bg-white rounded-lg border border-[var(--border)]">
                    {[
                      { l: "W1", val: 55 },
                      { l: "W2", val: 70 },
                      { l: "W3", val: 85 },
                      { l: "W4", val: 65 },
                      { l: "W5", val: 95 },
                      { l: "W6", val: 100 },
                      { l: "W7", val: 88 },
                    ].map((col, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full rounded-t-sm"
                          style={{
                            height: `${col.val}%`,
                            backgroundColor: "var(--chart-bar)", // #E8D87A strictly per SKILL.md
                          }}
                        />
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">{col.l}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-[var(--border)] text-left">
                      <div className="text-[11px] text-[var(--text-muted)]">API Latency</div>
                      <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">24ms</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[var(--border)] text-left">
                      <div className="text-[11px] text-[var(--text-muted)]">Automated Syncs</div>
                      <div className="text-base font-bold text-emerald-600 mt-0.5">99.98%</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[var(--border)] text-left">
                      <div className="text-[11px] text-[var(--text-muted)]">IP Ownership</div>
                      <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">100% Client</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 7 — ASYMMETRIC PRICING SECTION                       */}
      {/* ========================================================= */}
      <section id="pricing" className="py-24 bg-pattern relative border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Transparent, High-Leverage Engagements.
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)] mb-8">
              No bloated retainers. No hidden per-seat licensing. Complete source code handover with 100% intellectual property ownership.
            </p>

            {/* Monthly / Yearly Toggle (green pill toggle style per SKILL.md) */}
            <div className="inline-flex items-center bg-white border border-[var(--border)] rounded-[var(--radius-pill)] p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-[var(--radius-pill)] text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 py-2 rounded-[var(--radius-pill)] text-sm font-medium transition-all flex items-center gap-1.5 ${
                  billingCycle === "yearly"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>Full Project Engagement</span>
                <span className="text-[11px] bg-white text-[var(--accent)] font-bold px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Asymmetric 3-column pricing grid per SKILL.md Step 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-start max-w-[1050px] mx-auto gap-8 md:gap-0">
            {/* Plan 1: Basic Plan (Transparent, no card background, plain button) */}
            <div className="p-8 md:p-10 bg-transparent flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-body mb-2">
                  {pricingPlans[0].name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 min-h-[40px]">
                  {pricingPlans[0].description}
                </p>

                <div className="mb-8">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
                    {billingCycle === "monthly" ? pricingPlans[0].priceMonthly : pricingPlans[0].priceYearly}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
                    {pricingPlans[0].period} · No recurring seat fees
                  </div>
                </div>

                <div className="space-y-3.5 mb-8 text-sm">
                  {pricingPlans[0].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="text-[var(--text-secondary)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={pricingPlans[0].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer block"
              >
                {pricingPlans[0].buttonText} →
              </a>
            </div>

            {/* Plan 2: POPULAR Plan (Elevated, white card bg, shadow, accent button, margin-top offset) */}
            <div className="bg-white border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] p-8 md:p-10 md:-mt-6 relative z-10 flex flex-col justify-between">
              <div>
                <div className="text-center text-xs font-bold tracking-widest uppercase text-[var(--accent)] pb-3 mb-6 border-b border-[var(--border)]">
                  Most Popular Engagement
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-body mb-2">
                  {pricingPlans[1].name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 min-h-[40px]">
                  {pricingPlans[1].description}
                </p>

                <div className="mb-8">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
                    {billingCycle === "monthly" ? pricingPlans[1].priceMonthly : pricingPlans[1].priceYearly}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
                    {pricingPlans[1].period} · Complete turnkey deployment
                  </div>
                </div>

                <div className="space-y-3.5 mb-8 text-sm">
                  {pricingPlans[1].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="text-[var(--text-primary)] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={pricingPlans[1].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                <span>{pricingPlans[1].buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Plan 3: Pro Plan (Transparent, no card background, plain button) */}
            <div className="p-8 md:p-10 bg-transparent flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-body mb-2">
                  {pricingPlans[2].name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 min-h-[40px]">
                  {pricingPlans[2].description}
                </p>

                <div className="mb-8">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
                    {pricingPlans[2].priceMonthly}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
                    {pricingPlans[2].period} · Custom team allocation
                  </div>
                </div>

                <div className="space-y-3.5 mb-8 text-sm">
                  {pricingPlans[2].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="text-[var(--text-secondary)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={pricingPlans[2].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer block"
              >
                {pricingPlans[2].buttonText} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 8 — TESTIMONIALS (3x2 GRID, --bg-muted, NO BORDER)   */}
      {/* ========================================================= */}
      <section id="testimonials" className="py-24 bg-[var(--bg-subtle)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Proven Delivery. Trusted by Builders.
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)]">
              Direct feedback from business owners and technical leaders who partnered with EternaTech.
            </p>
          </div>

          {/* Testimonials 3x2 Grid per SKILL.md Step 8: gray bg (--bg-muted), 1px border gap, company logo at TOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)]">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[var(--bg-muted)] p-8 flex flex-col justify-between">
                <div>
                  {/* Company Logo at TOP per SKILL.md */}
                  <div className="mb-6 font-mono font-bold text-xs uppercase tracking-wider text-[var(--text-primary)] opacity-90 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span>{t.company}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-[15px] leading-relaxed text-[var(--text-primary)] mb-6 font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Avatar + Name + Role */}
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{t.author}</div>
                    <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STEP 9 — STATS ROW, FAQ, CTA BANNER, FOOTER               */}
      {/* ========================================================= */}

      {/* Stats Row: 4-column grid with dividing border lines, numbers in Playfair Display */}
      <section className="py-16 bg-white border-y border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
            <div className="p-8 text-center bg-white">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-2">
                &lt; 14 Days
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                Average MVP Deployment
              </div>
            </div>
            <div className="p-8 text-center bg-white">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-2">
                100%
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                IP & Code Ownership
              </div>
            </div>
            <div className="p-8 text-center bg-white">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-2">
                24 / 7
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                WhatsApp Automation Uptime
              </div>
            </div>
            <div className="p-8 text-center bg-white">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-2">
                ₹ 0
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                Recurring Per-Seat Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-[var(--bg-subtle)]">
        <div className="max-w-[840px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)]">
              Everything you need to know about working with EternaTech.
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="border-b border-[var(--border)] py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full flex items-center justify-between text-left font-semibold text-lg text-[var(--text-primary)] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 pb-2 text-[15px] leading-relaxed text-[var(--text-secondary)] pr-8">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner: Dark bg (--bg-dark: #111111) */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Have a project or operational challenge?
          </h2>
          <p className="text-[18px] text-neutral-300 max-w-xl mx-auto mb-10 leading-relaxed font-body">
            Speak directly with Shashwat Manu. We will review your current software stack and send a clear architecture proposal within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917827775679?text=Hi%20Shashwat,%20let's%20discuss%20building%20our%20project%20with%20EternaTech."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base"
            >
              <span>Message on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+917827775679"
              className="px-6 py-3.5 rounded-[var(--radius-md)] border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white transition-colors text-sm font-medium w-full sm:w-auto text-center"
            >
              Call +91 78277 75679
            </a>
          </div>
        </div>
      </section>

      {/* Footer: 4-column modern SaaS footer with logo */}
      <footer className="py-16 bg-[var(--bg-subtle)] border-t border-[var(--border)] text-sm text-[var(--text-secondary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[var(--border)]">
            {/* Col 1: Brand (2fr) */}
            <div className="md:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <Image
                  src="/logo-colored.png"
                  alt="EternaTech Logo"
                  width={34}
                  height={34}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-bold text-lg text-[var(--text-primary)]">EternaTech</span>
              </a>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)] max-w-sm">
                Engineering-first technology studio based in Delhi NCR. We build bespoke web platforms, mobile apps, and autonomous WhatsApp engines for ambitious businesses.
              </p>
              <div className="text-xs text-[var(--text-muted)]">
                Email: <a href="mailto:shashwat@eternatech.in" className="text-[var(--text-primary)] underline">shashwat@eternatech.in</a>
              </div>
            </div>

            {/* Col 2: Capabilities */}
            <div className="space-y-3">
              <div className="font-semibold text-xs uppercase tracking-wider text-[var(--text-primary)]">
                Capabilities
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li><a href="#capabilities" className="hover:text-[var(--text-primary)]">Custom Web Apps</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--text-primary)]">React Native Apps</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--text-primary)]">WhatsApp AI Engines</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--text-primary)]">Internal ERP Dashboards</a></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="space-y-3">
              <div className="font-semibold text-xs uppercase tracking-wider text-[var(--text-primary)]">
                Studio
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li><a href="#pricing" className="hover:text-[var(--text-primary)]">Engagements</a></li>
                <li><a href="#testimonials" className="hover:text-[var(--text-primary)]">Client Proof</a></li>
                <li><a href="#faq" className="hover:text-[var(--text-primary)]">FAQ</a></li>
                <li><a href="https://wa.me/917827775679" className="hover:text-[var(--text-primary)]">Direct WhatsApp</a></li>
              </ul>
            </div>

            {/* Col 4: Location */}
            <div className="space-y-3">
              <div className="font-semibold text-xs uppercase tracking-wider text-[var(--text-primary)]">
                Headquarters
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Delhi NCR, India.<br />
                Partnering with teams across Gurgaon, Noida, Delhi, Bengaluru & Global.
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Systems Active</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
            <div>
              © 2026 EternaTech. All rights reserved. 100% Client Code & IP Ownership.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[var(--text-primary)]">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--text-primary)]">Terms of Service</a>
              <a href="https://eternatech.in" className="hover:text-[var(--text-primary)]">eternatech.in</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
