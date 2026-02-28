import Link from "next/link";
import ProductWindow from "@/components/ProductWindow";

export default function Home() {
  return (
    <>
      {/* ── HERO ── dark forest green block ── */}
      <section className="bg-bg-dark pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[700px]">
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight text-text-on-dark mb-5">
              The future of advertising
              <br />
              <span className="text-text-on-dark-tertiary">
                is powered by machine learning.
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-block px-4 py-2 bg-accent text-bg-dark rounded-md text-[0.8125rem] font-semibold hover:bg-accent-hover transition-colors no-underline"
              >
                Get started
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
              >
                Learn about our platform &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── company badges */}
      <section className="bg-bg-cream py-10 md:py-12 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Pinterest", "Bumble", "DraftKings", "Robinhood", "Indeed", "Wayfair", "King", "Roblox"].map(
              (name) => (
                <span key={name} className="company-badge">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* ── AI OPTIMIZATION ── text left + floating window right (like Cursor agents section) ── */}
      <section className="bg-bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-10 items-start">
            {/* Left text */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary mb-5 leading-[1.15]">
                AI that optimizes across your entire customer lifecycle
              </h2>
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
                With 90% of overall spend optimized for ROAS and CPA goals,
                Moloco&apos;s models drive real, measurable, and incremental business outcomes.
                Deep learning processes billions of data points in real time.
              </p>
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-6">
                Re-engagement costs 3.4x less than new acquisition,
                and delivers 685% greater ROAS. One platform, two strategies.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-text-primary hover:text-text-secondary transition-colors no-underline"
              >
                Learn about our products &rarr;
              </Link>
            </div>

            {/* Right floating window */}
            <div>
              <ProductWindow variant="optimize" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* ── STATS BAR ── */}
      <section className="bg-bg-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {[
            { number: "2B+", label: "Daily active users" },
            { number: "3M+", label: "Trusted apps" },
            { number: "250K+", label: "Advertisers globally" },
            { number: "$2B+", label: "Annualized ad spend" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[clamp(2rem,4vw,3.25rem)] font-medium text-text-primary mb-1 font-[family-name:var(--font-dm-sans)]">
                {stat.number}
              </p>
              <p className="text-[0.8125rem] text-text-tertiary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-line" />

      {/* ── PRODUCTS ── compact row ── */}
      <section className="bg-bg-cream py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-[0.8125rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-3">
                Our products
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-tight text-text-primary">
                Three platforms, one mission
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-text-primary hover:text-text-secondary transition-colors no-underline shrink-0"
            >
              View all products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-light rounded-lg overflow-hidden">
            {[
              {
                href: "/products",
                accentBorder: "border-orange",
                accentText: "text-orange",
                title: "Moloco Ads",
                desc: "AI-driven performance ads reaching 2B+ daily users across 3M independent apps.",
                stat: "2B+",
              },
              {
                href: "/products",
                accentBorder: "border-blue",
                accentText: "text-blue",
                title: "Commerce Media",
                desc: "Personalized onsite ads for retailers. Deep learning that improves with every impression.",
                stat: "90%",
              },
              {
                href: "/products",
                accentBorder: "border-violet",
                accentText: "text-violet",
                title: "Streaming Monetization",
                desc: "Full-funnel ad stack for streaming with advanced pacing and frequency control.",
                stat: "685%",
              },
            ].map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group block no-underline text-text-primary p-6 md:p-7 hover:bg-card-surface transition-colors ${i < 2 ? "md:border-r border-b md:border-b-0 border-border-light" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-3 h-3 rounded-full border-2 ${card.accentBorder}`} />
                  <span className={`text-[1.5rem] font-medium ${card.accentText} opacity-25 font-[family-name:var(--font-dm-sans)]`}>
                    {card.stat}
                  </span>
                </div>
                <h3 className="text-[1rem] font-medium mb-2 group-hover:text-text-secondary transition-colors">
                  {card.title}
                </h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-4">
                  {card.desc}
                </p>
                <span className="text-[0.8125rem] font-medium text-text-tertiary group-hover:text-text-primary transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP LEARNING SECTION ── dark with floating analytics window ── */}
      <section className="bg-bg-dark text-text-on-dark py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-10 items-start">
            {/* Floating window */}
            <div>
              <ProductWindow variant="analytics" />
            </div>

            {/* Right text */}
            <div className="lg:sticky lg:top-32">
              <p className="text-[0.8125rem] font-medium text-text-on-dark-tertiary uppercase tracking-[0.08em] mb-4">
                Deep learning at the core
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.12] tracking-tight mb-5">
                Not bolted on.
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Proprietary Deep Learning",
                    desc: "Our models process billions of data points in real time, predicting which impressions will drive conversions.",
                  },
                  {
                    title: "First-party Data Ready",
                    desc: "Built for a privacy-first world. No dependency on third-party cookies or identifiers.",
                  },
                  {
                    title: "Full-funnel Optimization",
                    desc: "From awareness to conversion, our system optimizes across every stage simultaneously.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-border-dark-medium pl-4">
                    <p className="text-[0.9375rem] font-medium text-text-on-dark mb-1">{item.title}</p>
                    <p className="text-[0.875rem] text-text-on-dark-secondary leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-bg-warm py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[0.8125rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-6">
              Our mission
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-tight text-text-primary mb-8">
              &ldquo;AI should be accessible to all businesses, not just tech
              giants.&rdquo;
            </h2>
            <p className="text-[1rem] text-text-secondary leading-relaxed">
              Founded by machine learning pioneers who built YouTube&apos;s
              monetization engine and Android Play Store advertising systems,
              Moloco exists to level the playing field for independent companies
              everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bg-dark text-text-on-dark py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-medium tracking-tight mb-5">
            Ready to grow with deep learning?
          </h2>
          <p className="text-[1rem] text-text-on-dark-secondary mb-10 max-w-[480px] mx-auto">
            Join 250,000+ advertisers already using Moloco&apos;s machine
            learning to scale their business.
          </p>
          <Link
            href="#"
            className="inline-block px-7 py-3.5 bg-accent text-bg-dark rounded-lg text-[0.9375rem] font-semibold hover:bg-accent-hover transition-colors no-underline"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
