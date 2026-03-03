"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  name: string;
  type: string;
  location: string;
  detail: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Graha Sudirman Tower",
    type: "Office",
    location: "Jakarta",
    detail: "45 Floors",
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
  },
  {
    name: "The Residence Kemang",
    type: "Residential",
    location: "South Jakarta",
    detail: "200 Units",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    name: "Prima Mall Surabaya",
    type: "Retail",
    location: "Surabaya",
    detail: "85,000 sqm",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80",
  },
  {
    name: "Sentosa Hills",
    type: "Township",
    location: "Tangerang",
    detail: "500 Hectares",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "The Loft BSD",
    type: "Mixed-use",
    location: "BSD City",
    detail: "32 Floors",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
  },
  {
    name: "Graha Business Park",
    type: "Industrial",
    location: "Cikarang",
    detail: "120 Hectares",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
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
              Portfolio
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
              Landmark Developments
            </h2>
            <p className="max-w-md text-base text-text-muted">
              From iconic towers to sprawling townships, each project reflects
              our commitment to excellence and innovation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <p className="mt-2 text-sm font-medium text-gold">
                  {project.type}
                </p>
                <p className="mt-1 text-sm text-white/80">{project.location}</p>
                <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                  {project.detail}
                </p>
                <button className="mt-6 rounded-sm border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
