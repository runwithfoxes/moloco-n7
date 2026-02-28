"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {started ? value.toLocaleString() : "0"}
      {suffix}
    </span>
  );
}

type StatItem = {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  accent: string;
};

export default function AnimatedStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="space-y-4 md:pt-12">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="border-l-2 border-border-light pl-5 py-1"
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <p
            className={`text-[1.5rem] font-medium ${s.accent} font-[family-name:var(--font-dm-sans)] mb-0.5`}
          >
            <CountUp
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              duration={1400 + i * 200}
            />
          </p>
          <p className="text-[0.8125rem] text-text-tertiary">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
