"use client";

import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "12,000+", label: "Units Delivered" },
  { value: "28", label: "Landmark Projects" },
  { value: "2.4M", label: "Sqm Developed" },
];

const projects = [
  {
    name: "Graha Sudirman Tower",
    type: "Grade A Office",
    location: "Jakarta CBD",
    detail: "45-storey premium office tower with LEED Gold certification",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    name: "The Residence Kemang",
    type: "Luxury Residential",
    location: "South Jakarta",
    detail: "200 exclusive units with resort-style amenities",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Sentosa Hills Township",
    type: "Integrated Township",
    location: "Tangerang",
    detail: "500-hectare master-planned community",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
];

const services = [
  {
    title: "Property Development",
    description:
      "End-to-end development of residential towers, commercial complexes, and master-planned townships that define modern Indonesian living.",
    iconPath:
      "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
  {
    title: "Construction Management",
    description:
      "Expert oversight from groundbreaking to handover — ensuring quality, safety, and on-time delivery across every project phase.",
    iconPath:
      "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    title: "Architecture & Design",
    description:
      "World-class architectural design that blends aesthetics with functionality, creating landmark spaces that inspire and endure.",
    iconPath:
      "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    title: "Asset Management",
    description:
      "Strategic management and optimization of real estate portfolios, maximizing returns while maintaining the highest standards of property care.",
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

const contactInfo = {
  address:
    "Graha Prima Tower, 25th Floor\nJl. Jenderal Sudirman Kav. 52-53\nJakarta Selatan 12190",
  phone: "+62 21 5785 1234",
  email: "info@primagraha.co.id",
};

/* ──────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════
          NAVBAR
          ═══════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-[0_1px_0_rgba(200,163,95,0.2)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-gold bg-navy">
                <span className="font-[family-name:var(--font-dm-serif)] text-lg text-gold">
                  PG
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-[family-name:var(--font-dm-serif)] text-lg leading-tight transition-colors duration-300 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  Prima Graha
                </span>
                <span
                  className={`text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                    scrolled ? "text-gold" : "text-gold-light"
                  }`}
                >
                  Group
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="border border-gold bg-transparent px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "translate-y-[8px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 border border-gold bg-navy py-3 text-center text-sm font-semibold uppercase tracking-wider text-gold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern glass skyscraper"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy-dark/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-2xl py-32">
            {/* Accent line */}
            <div className="mb-8 flex items-center gap-4 animate-fade-in">
              <div className="h-px w-16 bg-gold" />
              <span className="text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
                Established 1989
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.1] text-white sm:text-5xl lg:text-7xl animate-fade-in-up">
              Building
              <br />
              Indonesia&apos;s{" "}
              <span className="text-gold">Future</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70 animate-fade-in-up animate-delay-200">
              For over three decades, Prima Graha Group has shaped
              Indonesia&apos;s skyline with world-class developments that set
              new standards for quality, design, and sustainable living.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 animate-fade-in-up animate-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-gold px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-navy-dark transition-all duration-300 hover:bg-gold-light hover:shadow-lg"
              >
                Explore Projects
                <svg
                  className="ml-3 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-white/30 px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Learn More
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 animate-fade-in animate-delay-500">
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  A+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/40">
                  Credit Rating
                </span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  ISO
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/40">
                  9001 Certified
                </span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  IDX
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/40">
                  Listed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT / INTRODUCTION
          ═══════════════════════════════════════ */}
      <section id="about" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Luxury modern architecture"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Gold accent border */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-gold/30" />
            </div>

            {/* Right: Content */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
                  About Us
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-navy lg:text-5xl">
                A Legacy of
                <br />
                Building Excellence
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
                <p>
                  Founded in 1989, Prima Graha Group has grown from a single
                  residential project in Jakarta into one of Indonesia&apos;s most
                  respected property developers. Our portfolio spans luxury
                  residences, Grade A offices, retail destinations, and
                  integrated townships.
                </p>
                <p>
                  We believe that exceptional spaces require more than
                  construction expertise — they demand a deep understanding of
                  how people live, work, and connect. Every Prima Graha
                  development is designed with this philosophy at its core.
                </p>
              </div>

              {/* Key highlights */}
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-navy">
                    4
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Major Cities Across Indonesia
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-navy">
                    6
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Industry Awards in 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATISTICS
          ═══════════════════════════════════════ */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center lg:px-8">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gold sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <div className="mt-3 h-px w-8 bg-gold/30" />
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PROJECTS
          ═══════════════════════════════════════ */}
      <section id="projects" className="bg-light-gray py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
                  Portfolio
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-5xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-text-muted">
              From iconic towers to master-planned townships, each project
              reflects our commitment to excellence and innovation.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                  {/* Type badge */}
                  <div className="absolute left-5 top-5 border border-white/30 bg-navy/80 px-3 py-1 backdrop-blur-sm">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="border-t-2 border-gold p-6">
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-navy">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-gold">
                    {project.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {project.detail}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-navy transition-colors duration-300 group-hover:text-gold">
                    View Project
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
                What We Do
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted">
              Comprehensive property solutions backed by decades of expertise
              and an unwavering commitment to quality.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/20 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-navy group-hover:text-gold">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.iconPath}
                    />
                  </svg>
                </div>

                <h3 className="mb-3 font-[family-name:var(--font-dm-serif)] text-lg text-navy">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                {/* Decorative bottom line */}
                <div className="mt-6 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VISION BANNER
          ═══════════════════════════════════════ */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
            alt="Luxury modern property"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
                Our Vision
              </span>
              <div className="h-px w-12 bg-gold/50" />
            </div>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-white lg:text-5xl">
              Creating spaces that inspire
              <span className="text-gold"> generations</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              We envision a future where every Prima Graha development becomes
              a cornerstone of its community — blending innovation,
              sustainability, and timeless design.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center bg-gold px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-navy-dark transition-all duration-300 hover:bg-gold-light"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA
          ═══════════════════════════════════════ */}
      <section id="contact" className="bg-light-gray py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Info */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
                  Contact
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-5xl">
                Let&apos;s Build
                <br />
                Something Great
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
                Whether you&apos;re looking for your dream property, exploring
                investment opportunities, or seeking a development partner,
                we&apos;d love to hear from you.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 text-gold">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Head Office
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-text-muted">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 text-gold">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Phone</p>
                    <p className="mt-1 text-sm text-text-muted">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 text-gold">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Email</p>
                    <p className="mt-1 text-sm text-text-muted">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 shadow-sm lg:p-12">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-navy">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for your inquiry. We will get back to you shortly."
                  );
                }}
                className="mt-8 space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[13px] font-medium text-navy"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[13px] font-medium text-navy"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[13px] font-medium text-navy"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
                  >
                    <option value="">Select a subject</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="purchase">Property Purchase</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-medium text-navy"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full resize-none border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold transition-all duration-300 hover:bg-navy-light sm:w-auto"
                >
                  Send Message
                  <svg
                    className="ml-2 inline-block h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="bg-navy-dark">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-white/5">
                  <span className="font-[family-name:var(--font-dm-serif)] text-lg text-gold">
                    PG
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-dm-serif)] text-lg leading-tight text-white">
                    Prima Graha
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold/60">
                    Group
                  </span>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/50">
                Indonesia&apos;s trusted property developer, building
                world-class residential, commercial, and mixed-use developments
                since 1989.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-gold"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-gold"
                  >
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li>
                  Graha Prima Tower, 25th Floor
                  <br />
                  Jl. Jenderal Sudirman Kav. 52-53
                  <br />
                  Jakarta Selatan 12190
                </li>
                <li>{contactInfo.phone}</li>
                <li>{contactInfo.email}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} Prima Graha Group. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-xs text-white/30 transition-colors hover:text-white/50"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs text-white/30 transition-colors hover:text-white/50"
                >
                  Terms of Service
                </a>
                <span className="text-xs text-white/30">
                  Made with{" "}
                  <span className="text-red-400">&hearts;</span> by{" "}
                  <a
                    href="https://creativism.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold transition-colors hover:text-gold-light"
                  >
                    Creativism
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
