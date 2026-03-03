"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
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
              For over three decades, Prima Graha Group has been shaping
              Indonesia&apos;s skyline with world-class developments that set
              new standards for quality, design, and sustainable living.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-light"
              >
                Explore Our Projects
                <svg
                  className="ml-2 h-4 w-4"
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
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border-2 border-navy px-8 py-4 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
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
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Modern glass skyscraper reflecting sunlight"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 rounded-sm bg-white p-6 shadow-xl lg:-left-12"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gold/10">
                  <svg
                    className="h-7 w-7 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-navy">
                    28
                  </p>
                  <p className="text-sm text-text-muted">Active Projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
