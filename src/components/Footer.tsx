"use client";

import { motion } from "framer-motion";

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

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-8 lg:flex-row"
          >
            <div>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white lg:text-3xl">
                Ready to Build Your Vision?
              </h3>
              <p className="mt-2 text-base text-white/60">
                Let&apos;s discuss how Prima Graha can bring your project to
                life.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-navy-dark transition-all hover:bg-gold-light"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10">
                <span className="font-[family-name:var(--font-dm-serif)] text-lg text-gold">
                  PG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-dm-serif)] text-lg leading-tight text-white">
                  Prima Graha
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Group
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Indonesia&apos;s trusted property developer, building world-class
              residential, commercial, and mixed-use developments since 1989.
            </p>
            <div className="mt-6 flex gap-3">
              {/* Social icons */}
              {["LinkedIn", "Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span className="text-xs font-semibold">
                    {social.charAt(0)}
                  </span>
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
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
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
                  <a
                    href="#portfolio"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
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
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Prima Graha Group. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/40 hover:text-white/60">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/40 hover:text-white/60">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/40 hover:text-white/60">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
