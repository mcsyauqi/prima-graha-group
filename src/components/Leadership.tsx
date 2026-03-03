"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const leaders: Leader[] = [
  {
    name: "Hendra Wijaya",
    title: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "30+ years in property development across Southeast Asia.",
  },
  {
    name: "Diana Sutanto",
    title: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "Former McKinsey consultant, driving operational excellence.",
  },
  {
    name: "Robert Tanaka",
    title: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    bio: "Ex-Goldman Sachs, managing $2B+ in real estate assets.",
  },
  {
    name: "Sarah Lim",
    title: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    bio: "Award-winning marketer specializing in luxury property brands.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Team
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
            Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
            Guided by visionary leaders with decades of combined experience in
            real estate, finance, and operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-sm">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
