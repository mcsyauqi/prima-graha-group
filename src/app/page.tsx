"use client";

import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "35+", label: "Years of Excellence", description: "Building trust since 1989" },
  { value: "12,000+", label: "Units Delivered", description: "Homes and offices completed" },
  { value: "28", label: "Landmark Projects", description: "Across Indonesia" },
  { value: "4", label: "Major Cities", description: "Jakarta, Surabaya, Tangerang, BSD" },
];

const projects = [
  {
    name: "Graha Sudirman Tower",
    type: "Office",
    location: "Jakarta",
    detail: "45 Floors",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    name: "The Residence Kemang",
    type: "Residential",
    location: "South Jakarta",
    detail: "200 Units",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    name: "Prima Mall Surabaya",
    type: "Retail",
    location: "Surabaya",
    detail: "85,000 sqm",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  },
  {
    name: "Sentosa Hills",
    type: "Township",
    location: "Tangerang",
    detail: "500 Hectares",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "The Loft BSD",
    type: "Mixed-use",
    location: "BSD City",
    detail: "32 Floors",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    name: "Graha Business Park",
    type: "Industrial",
    location: "Cikarang",
    detail: "120 Hectares",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
];

const services = [
  {
    title: "Property Development",
    description:
      "End-to-end development of residential, commercial, and mixed-use properties that define modern Indonesian living.",
    features: ["Master Planning", "Residential Towers", "Commercial Complexes", "Township Development"],
    iconPath:
      "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
  {
    title: "Construction Management",
    description:
      "Expert oversight of construction projects from groundbreaking to handover, ensuring quality, safety, and on-time delivery.",
    features: ["Project Oversight", "Quality Assurance", "Safety Compliance", "Budget Management"],
    iconPath:
      "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    title: "Architecture & Design",
    description:
      "World-class architectural design that blends aesthetics with functionality, creating spaces that inspire and endure.",
    features: ["Concept Design", "Interior Planning", "Landscape Architecture", "Sustainable Design"],
    iconPath:
      "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
];

const awards = [
  { title: "Best Developer", organization: "PropertyGuru Asia", year: "2024" },
  { title: "Green Building", organization: "GBCI Indonesia", year: "2023" },
  { title: "Excellence Award", organization: "FIABCI Prix", year: "2023" },
  { title: "Top 10 Developer", organization: "Forbes Indonesia", year: "2024" },
  { title: "Innovation Award", organization: "REI National", year: "2022" },
  { title: "CSR Excellence", organization: "Indonesia CSR", year: "2024" },
];

const leaders = [
  {
    name: "Hendra Wijaya",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "30+ years in property development across Southeast Asia.",
  },
  {
    name: "Diana Sutanto",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "Former McKinsey consultant, driving operational excellence.",
  },
  {
    name: "Robert Tanaka",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    bio: "Ex-Goldman Sachs, managing $2B+ in real estate assets.",
  },
  {
    name: "Sarah Lim",
    title: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    bio: "Award-winning marketer specializing in luxury property brands.",
  },
];

const newsItems = [
  {
    title: "Graha Sudirman Tower Tops Out at 45 Stories",
    excerpt:
      "A major milestone as Jakarta's newest Grade A office tower reaches its full height, on track for Q3 2026 completion.",
    date: "Feb 28, 2026",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Prima Graha Partners with Global Sustainability Fund",
    excerpt:
      "New partnership aims to achieve net-zero carbon across all new developments by 2030, setting industry benchmark.",
    date: "Feb 15, 2026",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "The Residence Kemang Wins Asia Property Award",
    excerpt:
      "Our luxury residential project recognized for outstanding architectural design and community planning excellence.",
    date: "Jan 20, 2026",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const contactInfo = [
  {
    label: "Head Office",
    value: "Graha Prima Tower, 25th Floor\nJl. Jenderal Sudirman Kav. 52-53\nJakarta Selatan 12190",
    iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    label: "Phone",
    value: "+62 21 5785 1234\n+62 21 5785 5678",
    iconPath:
      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: "info@primagraha.co.id\ncorporate@primagraha.co.id",
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Business Hours",
    value: "Monday - Friday: 08:00 - 17:00\nSaturday: 09:00 - 13:00",
    iconPath: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const subjects = [
  "General Inquiry",
  "Investment Opportunities",
  "Property Purchase",
  "Partnership Proposal",
  "Career Opportunities",
  "Media & Press",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Leadership", href: "#leadership" },
  { label: "Careers", href: "#" },
  { label: "Investor Relations", href: "#" },
];

const projectLinks = [
  "Graha Sudirman Tower",
  "The Residence Kemang",
  "Prima Mall Surabaya",
  "Sentosa Hills",
  "The Loft BSD",
  "Graha Business Park",
];

/* ──────────────────────────────────────────────
   SECTION LABEL COMPONENT
   ────────────────────────────────────────────── */

function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <div className="h-px w-12 bg-gold" />
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{text}</span>
      {center && <div className="h-px w-12 bg-gold" />}
    </div>
  );
}

/* ──────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will get back to you shortly.");
  };

  return (
    <main>
      {/* ═══════════════════════════════════════
          NAVBAR
          ═══════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy">
                <span className="font-[family-name:var(--font-dm-serif)] text-lg font-normal text-gold">
                  PG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-dm-serif)] text-lg leading-tight text-navy">
                  Prima Graha
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
                  Group
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-primary transition-colors duration-200 hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-sm bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-light"
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
                className={`block h-0.5 w-6 bg-navy transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-navy transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-navy transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-light-gray"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-sm bg-navy px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gold" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Established 1989
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
                Building Indonesia&apos;s Future,{" "}
                <span className="text-gold">One Landmark</span> at a Time
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-text-muted">
                For over three decades, Prima Graha Group has been shaping Indonesia&apos;s skyline
                with world-class developments that set new standards for quality, design, and
                sustainable living.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-light"
                >
                  Explore Our Projects
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-navy px-8 py-4 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
                >
                  Contact Us
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-4 flex items-center gap-6 border-t border-gray-100 pt-6">
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-navy">
                    A+
                  </span>
                  <span className="text-xs text-text-muted">Credit Rating</span>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-navy">
                    ISO
                  </span>
                  <span className="text-xs text-text-muted">9001 Certified</span>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-navy">
                    IDX
                  </span>
                  <span className="text-xs text-text-muted">Listed</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                  alt="Modern glass skyscraper reflecting sunlight"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-sm bg-white p-6 shadow-xl lg:-left-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gold/10">
                    <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-navy">28</p>
                    <p className="text-sm text-text-muted">Active Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS / ABOUT
          ═══════════════════════════════════════ */}
      <section id="about" className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionLabel text="Our Track Record" center />
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Numbers That Speak
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-navy lg:text-6xl">
                  {stat.value}
                </span>
                <p className="mt-3 text-base font-semibold text-text-primary">{stat.label}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <SectionLabel text="Portfolio" />
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
                Landmark Developments
              </h2>
              <p className="max-w-md text-base text-text-muted">
                From iconic towers to sprawling townships, each project reflects our commitment to
                excellence and innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Default bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {project.type} &bull; {project.location}
                  </p>
                </div>

                {/* Hover detail */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="mb-3 h-px w-12 bg-gold" />
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold">{project.type}</p>
                  <p className="mt-1 text-sm text-white/80">{project.location}</p>
                  <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {project.detail}
                  </p>
                  <button className="mt-6 rounded-sm border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionLabel text="What We Do" center />
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Comprehensive property solutions backed by decades of expertise and an unwavering
              commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-sm border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-navy/20 hover:shadow-lg"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </div>

                <h3 className="mb-3 font-[family-name:var(--font-dm-serif)] text-xl text-navy">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-text-muted">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-primary">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AWARDS
          ═══════════════════════════════════════ */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionLabel text="Recognition" center />
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Awards & Accolades
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Our commitment to excellence has been recognized by leading industry bodies across
              Asia and Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {awards.map((award) => (
              <div key={award.title + award.year} className="flex flex-col items-center gap-3 text-center">
                {/* Shield shape */}
                <div className="relative flex h-24 w-20 flex-col items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
                      background: "linear-gradient(180deg, #1B3A5C 0%, #0F2740 100%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <svg className="mb-1 h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-gold">
                      {award.year}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{award.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LEADERSHIP
          ═══════════════════════════════════════ */}
      <section id="leadership" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <SectionLabel text="Our Team" center />
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Guided by visionary leaders with decades of combined experience in real estate,
              finance, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <div key={leader.name} className="group text-center">
                <div className="relative mx-auto mb-6 aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <h3 className="font-[family-name:var(--font-dm-serif)] text-lg text-navy">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                  {leader.title}
                </p>
                <p className="mt-2 text-sm text-text-muted">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWS
          ═══════════════════════════════════════ */}
      <section id="news" className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <SectionLabel text="Latest Updates" />
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
                News & Insights
              </h2>
              <button className="text-sm font-semibold text-navy transition-colors hover:text-gold">
                View All Articles &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="group cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-sm bg-navy px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <time className="font-[family-name:var(--font-space-grotesk)] text-xs text-text-muted">
                    {item.date}
                  </time>
                  <h3 className="mt-2 font-[family-name:var(--font-dm-serif)] text-lg leading-snug text-navy transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                    Read More
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════ */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <SectionLabel text="Get in Touch" />
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-navy">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.label}</p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-text-muted">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-light-gray">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                  alt="Jakarta skyline - office location"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-sm bg-white/90 px-6 py-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-navy">Sudirman CBD, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812 3456 7890"
                      className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-navy"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-navy"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-light sm:w-auto"
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
        {/* Top CTA Banner */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white lg:text-3xl">
                  Ready to Build Your Vision?
                </h3>
                <p className="mt-2 text-base text-white/60">
                  Let&apos;s discuss how Prima Graha can bring your project to life.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-navy-dark transition-colors duration-200 hover:bg-gold-light"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: About */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10">
                  <span className="font-[family-name:var(--font-dm-serif)] text-lg text-gold">PG</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-dm-serif)] text-lg leading-tight text-white">
                    Prima Graha
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">Group</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Indonesia&apos;s trusted property developer, building world-class residential,
                commercial, and mixed-use developments since 1989.
              </p>
              <div className="mt-6 flex gap-3">
                {["LinkedIn", "Instagram", "Twitter", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span className="text-xs font-semibold">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Projects */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                Our Projects
              </h4>
              <ul className="space-y-3">
                {projectLinks.map((project) => (
                  <li key={project}>
                    <a href="#portfolio" className="text-sm text-white/60 transition-colors hover:text-gold">
                      {project}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="text-sm text-white/60">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Address
                  </span>
                  Graha Prima Tower, 25th Floor
                  <br />
                  Jl. Jenderal Sudirman Kav. 52-53
                  <br />
                  Jakarta Selatan 12190
                </li>
                <li className="text-sm text-white/60">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Phone
                  </span>
                  +62 21 5785 1234
                </li>
                <li className="text-sm text-white/60">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Email
                  </span>
                  info@primagraha.co.id
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/40">
                &copy; {new Date().getFullYear()} Prima Graha Group. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-white/40 hover:text-white/60">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-white/40 hover:text-white/60">
                  Terms of Service
                </a>
                <span className="text-xs text-white/40">
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
