"use client";

import { motion } from "framer-motion";

interface Award {
  title: string;
  organization: string;
  year: string;
}

const awards: Award[] = [
  {
    title: "Best Developer",
    organization: "PropertyGuru Asia",
    year: "2024",
  },
  {
    title: "Green Building",
    organization: "GBCI Indonesia",
    year: "2023",
  },
  {
    title: "Excellence Award",
    organization: "FIABCI Prix",
    year: "2023",
  },
  {
    title: "Top 10 Developer",
    organization: "Forbes Indonesia",
    year: "2024",
  },
  {
    title: "Innovation Award",
    organization: "REI National",
    year: "2022",
  },
  {
    title: "CSR Excellence",
    organization: "Indonesia CSR",
    year: "2024",
  },
];

function ShieldIcon({ title, organization, year }: Award) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Shield shape via CSS */}
      <div className="relative flex h-24 w-20 flex-col items-center justify-center">
        {/* Shield body */}
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
            background: "linear-gradient(180deg, #1B3A5C 0%, #0F2740 100%)",
          }}
        />
        {/* Inner content */}
        <div className="relative z-10 flex flex-col items-center">
          <svg
            className="mb-1 h-6 w-6 text-gold"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-gold">
            {year}
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="mt-0.5 text-xs text-text-muted">{organization}</p>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
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
              Recognition
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
            Awards & Accolades
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
            Our commitment to excellence has been recognized by leading industry
            bodies across Asia and Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title + award.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ShieldIcon {...award} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
