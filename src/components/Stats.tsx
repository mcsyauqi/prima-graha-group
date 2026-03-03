"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 35,
    suffix: "+",
    label: "Years of Excellence",
    description: "Building trust since 1989",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Units Delivered",
    description: "Homes and offices completed",
  },
  {
    value: 28,
    suffix: "",
    label: "Landmark Projects",
    description: "Across Indonesia",
  },
  {
    value: 4,
    suffix: "",
    label: "Major Cities",
    description: "Jakarta, Surabaya, Tangerang, BSD",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted =
    count >= 1000 ? count.toLocaleString("en-US") : count.toString();

  return (
    <span ref={ref} className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-navy lg:text-6xl">
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="bg-light-gray py-24 lg:py-32">
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
              Our Track Record
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-navy lg:text-4xl">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-base font-semibold text-text-primary">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-text-muted">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
