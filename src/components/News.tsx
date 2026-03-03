"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const news: NewsItem[] = [
  {
    title: "Graha Sudirman Tower Tops Out at 45 Stories",
    excerpt:
      "A major milestone as Jakarta's newest Grade A office tower reaches its full height, on track for Q3 2026 completion.",
    date: "Feb 28, 2026",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    title: "Prima Graha Partners with Global Sustainability Fund",
    excerpt:
      "New partnership aims to achieve net-zero carbon across all new developments by 2030, setting industry benchmark.",
    date: "Feb 15, 2026",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "The Residence Kemang Wins Asia Property Award",
    excerpt:
      "Our luxury residential project recognized for outstanding architectural design and community planning excellence.",
    date: "Jan 20, 2026",
    category: "Awards",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Latest Updates
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              News & Insights
            </h2>
            <button className="text-sm font-semibold text-navy transition-colors hover:text-gold">
              View All Articles &rarr;
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">
                  Read More
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
