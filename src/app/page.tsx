'use client';

import { useState } from 'react';

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

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
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
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
    letter: 'D',
    title: 'Property Development',
    description:
      'End-to-end development of residential, commercial, and mixed-use properties. From land acquisition through design, construction, and handover, we deliver projects that exceed expectations.',
  },
  {
    letter: 'A',
    title: 'Asset Management',
    description:
      'Strategic portfolio management that maximizes property value and investment returns. We maintain the highest standards of operations across all managed assets.',
  },
  {
    letter: 'U',
    title: 'Urban Planning',
    description:
      'Master planning of integrated townships and urban districts. We create sustainable, livable communities that balance density with green spaces and amenities.',
  },
  {
    letter: 'C',
    title: 'Construction Management',
    description:
      'Expert project oversight ensuring quality, safety, and timely delivery. Our construction management team brings decades of experience to every build.',
  },
];

const contactInfo = {
  address:
    'Graha Prima Tower, 25th Floor\nJl. Jenderal Sudirman Kav. 52-53\nJakarta Selatan 12190',
  phone: '+62 21 5785 1234',
  email: 'info@primagraha.co.id',
};

/* ──────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main>
      {/* ═══════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_0_rgba(27,58,92,0.08)]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="select-none">
              <span
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-xl font-bold tracking-wide text-navy"
              >
                PRIMA GRAHA GROUP
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] text-navy transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gold px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-gold-dark"
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
                className={`block h-0.5 w-6 bg-navy transition-all duration-300 ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-navy transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-navy transition-all duration-300 ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-80 border-t border-gray-border' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-gold py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
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
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80"
            alt="Modern luxury property development"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/75 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-2xl pt-20">
            {/* Gold label */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-gold">
                EST. 1989
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-7xl"
            >
              Building
              <br />
              Indonesia&apos;s Future
            </h1>

            {/* Subtext */}
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              For over three decades, Prima Graha Group has shaped Indonesia&apos;s
              most prestigious addresses. We create landmark developments that set
              new standards for quality, innovation, and sustainable living.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-navy px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-navy-light"
              >
                Our Projects
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-white/30 px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-gold hover:text-gold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════ */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: Content */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                  About Us
                </span>
              </div>

              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-3xl leading-tight text-navy lg:text-5xl"
              >
                Three Decades
                <br />
                of Excellence
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-text">
                <p>
                  Founded in 1989, Prima Graha Group has grown from a single
                  residential project in Jakarta into one of Indonesia&apos;s most
                  respected integrated property developers. Our portfolio spans
                  premium residences, Grade A commercial towers, retail
                  destinations, and master-planned townships across four major
                  cities.
                </p>
                <p>
                  We believe that exceptional developments require more than
                  engineering prowess &mdash; they demand a deep understanding of
                  how people live, work, and aspire. Every Prima Graha project
                  is guided by our commitment to quality craftsmanship, timeless
                  design, and environmental responsibility.
                </p>
              </div>
            </div>

            {/* Right: Image with gold left border accent */}
            <div className="relative">
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gold" />
              <div className="ml-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                  alt="Modern architectural development"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════ */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center"
              >
                {/* Gold vertical divider (not on first item) */}
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gold/40 lg:block" />
                )}
                <span
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-4xl text-white sm:text-5xl"
                >
                  {stat.value}
                </span>
                <span className="mt-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-gold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PROJECTS
          ═══════════════════════════════════════ */}
      <section id="projects" className="bg-gray-bg py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Portfolio
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-navy lg:text-5xl"
            >
              Featured Developments
            </h2>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Gold top border */}
                <div className="h-1 bg-gold" />

                {/* Info */}
                <div className="p-6">
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-xl text-navy"
                  >
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[13px] font-medium text-gray-text">
                      {project.location}
                    </span>
                    <span className="text-gray-border">|</span>
                    <span className="inline-block border border-gold/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      {project.type}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-text">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                What We Do
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-navy lg:text-5xl"
            >
              Our Services
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-gray-border p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
              >
                {/* Icon circle with letter */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold">
                  {service.letter}
                </div>

                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-3 text-lg text-navy"
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIAL
          ═══════════════════════════════════════ */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            {/* Gold quotation marks */}
            <span
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-6xl leading-none text-gold"
            >
              &ldquo;
            </span>

            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mt-4 text-2xl leading-relaxed text-white italic lg:text-3xl"
            >
              Prima Graha Group doesn&apos;t just build properties &mdash; they
              create legacies. Their attention to quality and design is unmatched
              in the Indonesian market. We are proud to have partnered with them
              on three landmark developments.
            </p>

            <div className="mt-10">
              <p className="text-base font-semibold text-white">
                Ir. Bambang Hartono
              </p>
              <p className="mt-1 text-sm text-gold">
                Chairman, Indonesian Property Association
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════ */}
      <section id="contact" className="bg-gray-bg py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Info */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Contact
                </span>
              </div>

              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-3xl text-navy lg:text-5xl"
              >
                Get in Touch
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-text">
                Whether you are exploring investment opportunities, seeking your
                next home, or looking for a development partner, we would be
                delighted to speak with you.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
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
                    <p className="text-sm font-semibold text-navy">Head Office</p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-gray-text">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
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
                    <p className="mt-1 text-sm text-gray-text">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
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
                    <p className="mt-1 text-sm text-gray-text">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 shadow-sm lg:p-12">
              <h3
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-xl text-navy"
              >
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-gray-text">
                Fill out the form below and our team will respond within 24 hours.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    'Thank you for your inquiry. Our team will get back to you shortly.'
                  );
                }}
                className="mt-8 space-y-5"
              >
                {/* Name */}
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
                    placeholder="Your full name"
                    className="w-full border border-gray-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-text/40 focus:border-gold"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-medium text-navy"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-text/40 focus:border-gold"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-[13px] font-medium text-navy"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company (optional)"
                    className="w-full border border-gray-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-text/40 focus:border-gold"
                  />
                </div>

                {/* Message */}
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
                    className="w-full resize-none border border-gray-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-text/40 focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-gold-dark sm:w-auto"
                >
                  Send Message
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
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo + Description */}
            <div>
              <span
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-lg font-bold text-white"
              >
                PRIMA GRAHA GROUP
              </span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Indonesia&apos;s trusted property developer since 1989. Building
                world-class residential, commercial, and mixed-use developments
                across the archipelago.
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
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Projects */}
            <div>
              <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Projects
              </h4>
              <ul className="space-y-3">
                {projects.map((project) => (
                  <li key={project.name}>
                    <a
                      href="#projects"
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li className="whitespace-pre-line leading-relaxed">
                  {contactInfo.address}
                </li>
                <li>{contactInfo.phone}</li>
                <li>{contactInfo.email}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} Prima Graha Group. All rights
                reserved.
              </p>
              <p className="text-xs text-white/30">
                Made with{' '}
                <span className="text-red-400">&hearts;</span> by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold transition-colors hover:text-gold-light"
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
