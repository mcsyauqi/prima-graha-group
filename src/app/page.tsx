'use client';

import { useState, useEffect } from 'react';

/* ─── Data ─── */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '35+', label: 'Years' },
  { value: '12,000+', label: 'Units Delivered' },
  { value: '28', label: 'Projects' },
  { value: '4', label: 'Cities' },
];

const projects = [
  {
    name: 'Graha Sudirman Tower',
    type: 'Commercial',
    location: 'Jakarta',
    description:
      'A 42-storey Grade A commercial tower in the heart of Jakarta CBD, featuring smart building systems and LEED Gold certification.',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    name: 'Prima Gardens',
    type: 'Residential',
    location: 'Bandung',
    description:
      'An exclusive gated community of 320 contemporary homes surrounded by landscaped gardens and premium recreational facilities.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    name: 'The Meridian',
    type: 'Mixed-Use',
    location: 'Surabaya',
    description:
      'A landmark mixed-use development integrating luxury residences, retail spaces, and a five-star hotel on 12 hectares.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
];

const services = [
  {
    icon: '\u2302',
    title: 'Property Development',
    description:
      'End-to-end development of residential, commercial, and mixed-use properties. From land acquisition through design, construction, and handover.',
  },
  {
    icon: '\u25C7',
    title: 'Asset Management',
    description:
      'Strategic portfolio management that maximizes property value and investment returns with the highest standards of operations.',
  },
  {
    icon: '\u2606',
    title: 'Urban Planning',
    description:
      'Master planning of integrated townships and urban districts that balance density with green spaces and modern amenities.',
  },
  {
    icon: '\u2248',
    title: 'Construction Management',
    description:
      'Expert project oversight ensuring quality, safety, and timely delivery backed by decades of construction experience.',
  },
];

const testimonial = {
  quote:
    'Prima Graha Group doesn\'t just build properties \u2014 they create legacies. Their attention to quality and design is unmatched in the Indonesian market. We are proud to have partnered with them on three landmark developments.',
  name: 'Ir. Bambang Hartono',
  title: 'Chairman, Indonesian Property Association',
};

const contactInfo = {
  office: 'Head Office',
  address: 'Graha Prima Tower, 25th Floor\nJl. Jenderal Sudirman Kav. 52-53\nJakarta Selatan 12190',
  phone: '+62 21 5785 1234',
  email: 'info@primagraha.co.id',
  hours: 'Monday \u2013 Friday, 09:00 \u2013 17:00',
};

/* ─── Component ─── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════
          1. FIXED NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(27,58,92,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="font-[family-name:var(--font-heading)] text-xl tracking-wide select-none"
            >
              <span className={`transition-colors duration-500 ${scrolled ? 'text-[#1B3A5C]' : 'text-white'}`}>
                PRIMA GRAHA GROUP
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
                    scrolled
                      ? 'text-[#1B3A5C] hover:text-[#C8A35F]'
                      : 'text-white/80 hover:text-[#C8A35F]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className={`hidden md:inline-block px-7 py-2.5 font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                scrolled
                  ? 'bg-[#C8A35F] text-white hover:bg-[#B8934F]'
                  : 'border border-white/40 text-white hover:border-[#C8A35F] hover:text-[#C8A35F]'
              }`}
            >
              Get in Touch
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  scrolled ? 'bg-[#1B3A5C]' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  scrolled ? 'bg-[#1B3A5C]' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  scrolled ? 'bg-[#1B3A5C]' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-heading)] text-[#1B3A5C] text-2xl tracking-[0.15em] uppercase hover:text-[#C8A35F] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#C8A35F] text-white font-[family-name:var(--font-body)] text-sm font-semibold tracking-[0.15em] uppercase"
          >
            Get in Touch
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Premium corporate real estate development"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2740]/90 via-[#1B3A5C]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2740]/40 via-transparent to-[#0F2740]/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl pt-20">
              {/* Gold label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#C8A35F]" />
                <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.3em] uppercase">
                  Est. 1989
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-8">
                Building
                <br />
                Indonesia&apos;s Future
              </h1>

              {/* Tagline */}
              <p className="font-[family-name:var(--font-body)] text-white/70 text-lg leading-relaxed max-w-lg mb-10">
                For over three decades, Prima Graha Group has shaped Indonesia&apos;s
                most prestigious addresses. We create landmark developments that set
                new standards for quality, innovation, and sustainable living.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#1B3A5C] text-white font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#2A5580] transition-all duration-300"
                >
                  Our Projects
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.1em] uppercase hover:border-[#C8A35F] hover:text-[#C8A35F] transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-body)] text-white/50 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C8A35F] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. ABOUT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C8A35F]" />
                <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase">
                  About Us
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-5xl text-[#1B3A5C] leading-tight mb-8">
                Three Decades
                <br />
                of Excellence
              </h2>

              <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-base leading-relaxed mb-5">
                Founded in 1989, Prima Graha Group has grown from a single
                residential project in Jakarta into one of Indonesia&apos;s most
                respected integrated property developers. Our portfolio spans
                premium residences, Grade A commercial towers, retail
                destinations, and master-planned townships across four major
                cities.
              </p>

              <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-base leading-relaxed mb-10">
                We believe that exceptional developments require more than
                engineering prowess &mdash; they demand a deep understanding of
                how people live, work, and aspire. Every Prima Graha project
                is guided by our commitment to quality craftsmanship, timeless
                design, and environmental responsibility.
              </p>

              {/* Gold Accent Line */}
              <div className="w-16 h-[1px] bg-[#C8A35F]" />
            </div>

            {/* Right: Image with gold accent */}
            <div className="relative">
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#C8A35F]" />
              <div className="ml-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                  alt="Modern architectural development interior"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. STATS BAR
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative text-center"
              >
                {/* Gold vertical divider (not on first) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block w-[1px] h-12 bg-[#C8A35F]/40" />
                )}
                <span className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl block mb-2">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.15em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. FEATURED PROJECTS
      ══════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C8A35F]" />
              <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase">
                Portfolio
              </span>
              <div className="w-12 h-[1px] bg-[#C8A35F]" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-5xl text-[#1B3A5C]">
              Featured Developments
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-white overflow-hidden transition-shadow duration-500 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gold top border */}
                <div className="h-1 bg-[#C8A35F]" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-[#1B3A5C] mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[family-name:var(--font-body)] text-[#6B7280] text-[13px]">
                      {project.location}
                    </span>
                    <span className="text-[#E5E7EB]">|</span>
                    <span className="inline-block border border-[#C8A35F]/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#C8A35F]">
                      {project.type}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. SERVICES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C8A35F]" />
              <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase">
                What We Do
              </span>
              <div className="w-12 h-[1px] bg-[#C8A35F]" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-5xl text-[#1B3A5C]">
              Our Services
            </h2>
          </div>

          {/* 4-column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-[#E5E7EB] p-8 transition-all duration-500 hover:border-[#C8A35F]/40 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C] flex items-center justify-center mb-6">
                  <span className="text-[#C8A35F] text-xl">{service.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#1B3A5C] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. TESTIMONIAL
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Gold quotation marks */}
            <span className="font-[family-name:var(--font-heading)] text-[#C8A35F] text-6xl leading-none block">
              &ldquo;
            </span>

            <p className="font-[family-name:var(--font-heading)] text-white text-2xl lg:text-3xl italic leading-relaxed mt-4 mb-10">
              {testimonial.quote}
            </p>

            <div>
              <p className="font-[family-name:var(--font-body)] text-white text-base font-semibold">
                {testimonial.name}
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#C8A35F] text-sm mt-1">
                {testimonial.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. CONTACT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C8A35F]" />
              <span className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-5xl text-[#1B3A5C] mb-4">
              Get in Touch
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-base max-w-md">
              Whether you are exploring investment opportunities, seeking your
              next home, or looking for a development partner, we would be
              delighted to speak with you.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-sm font-semibold mb-2">
                    {contactInfo.office}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm leading-relaxed whitespace-pre-line">
                    {contactInfo.address}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-sm font-semibold mb-2">
                    Phone
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm">
                    {contactInfo.phone}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-sm font-semibold mb-2">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm">
                    {contactInfo.email}
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-sm font-semibold mb-2">
                    Business Hours
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-white shadow-sm p-8 lg:p-12"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-[#1B3A5C] mb-2">
                    Send Us a Message
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm mb-8">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>

                  {/* Name */}
                  <div className="mb-5">
                    <label className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-[13px] font-medium block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1B3A5C] font-[family-name:var(--font-body)] outline-none transition-colors placeholder:text-[#6B7280]/40 focus:border-[#C8A35F]"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-[13px] font-medium block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1B3A5C] font-[family-name:var(--font-body)] outline-none transition-colors placeholder:text-[#6B7280]/40 focus:border-[#C8A35F]"
                    />
                  </div>

                  {/* Company */}
                  <div className="mb-5">
                    <label className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-[13px] font-medium block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your company (optional)"
                      className="w-full border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1B3A5C] font-[family-name:var(--font-body)] outline-none transition-colors placeholder:text-[#6B7280]/40 focus:border-[#C8A35F]"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="font-[family-name:var(--font-body)] text-[#1B3A5C] text-[13px] font-medium block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can we help you?"
                      className="w-full border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1B3A5C] font-[family-name:var(--font-body)] outline-none transition-colors resize-none placeholder:text-[#6B7280]/40 focus:border-[#C8A35F]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#C8A35F] text-white font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#B8934F] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-white shadow-sm border border-[#C8A35F]/30 p-8 lg:p-12 flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border-2 border-[#C8A35F] rounded-full flex items-center justify-center mb-8">
                    <span className="text-[#C8A35F] text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#1B3A5C] mb-4">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm max-w-sm leading-relaxed">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours to discuss your requirements.
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A35F] to-transparent mt-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0F2740]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-white text-lg mb-4">
                PRIMA GRAHA GROUP
              </h3>
              <p className="font-[family-name:var(--font-body)] text-white/50 text-sm leading-relaxed max-w-xs">
                Indonesia&apos;s trusted property developer since 1989. Building
                world-class residential, commercial, and mixed-use developments
                across the archipelago.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                {[...navLinks.map((l) => l.label), 'Careers'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-[family-name:var(--font-body)] text-white/50 text-sm hover:text-[#C8A35F] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Projects */}
            <div>
              <h4 className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
                Projects
              </h4>
              <div className="space-y-3">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href="#projects"
                    className="block font-[family-name:var(--font-body)] text-white/50 text-sm hover:text-[#C8A35F] transition-colors duration-300"
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-[family-name:var(--font-body)] text-[#C8A35F] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
                Contact Info
              </h4>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-body)] text-white/50 text-sm whitespace-pre-line leading-relaxed">
                  {contactInfo.address}
                </p>
                <p className="font-[family-name:var(--font-body)] text-white/50 text-sm">
                  {contactInfo.phone}
                </p>
                <p className="font-[family-name:var(--font-body)] text-white/50 text-sm">
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-body)] text-white/30 text-xs">
                &copy; 2026 Prima Graha Group. All rights reserved.
              </p>
              <p className="font-[family-name:var(--font-body)] text-white/30 text-xs">
                Made with &#9829; by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8A35F]/60 hover:text-[#C8A35F] transition-colors"
                >
                  Creativism
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
