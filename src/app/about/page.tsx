import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-16 md:pt-44 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[720px]">
            <p className="text-[0.75rem] font-medium text-text-on-dark-tertiary uppercase tracking-[0.08em] mb-5">
              About Moloco
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight mb-7 text-text-on-dark">
              A scaling engine for the{" "}
              <span className="text-text-on-dark-tertiary">internet economy</span>
            </h1>
            <p className="text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-relaxed text-text-on-dark-secondary">
              We&apos;re democratizing access to advanced AI that has
              historically been reserved for tech giants. Every business
              deserves the tools to compete.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-bg-warm py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-[0.8125rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-5">
                Our founding
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary">
                Started in 2013 with a simple question
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
                Thousands of innovative apps with millions of users lacked
                sustainable business models. First-party data for personalized
                advertising was inaccessible to most. The tools that powered
                growth at YouTube, Google, and the Play Store were locked away
                inside big tech.
              </p>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                Our founders, machine learning pioneers who had built those very
                systems, saw the gap. They created Moloco to bring planet-scale
                ML to every app and business, regardless of size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { number: "2013", label: "Founded" },
              { number: "700+", label: "Team members" },
              { number: "12+", label: "Global offices" },
              { number: "5+", label: "Consecutive profitable years" },
              { number: "$0", label: "Debt" },
              { number: "<1%", label: "TAM penetrated" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-t border-border-light pt-5"
              >
                <p className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium text-text-primary mb-2 font-[family-name:var(--font-dm-sans)]">
                  {stat.number}
                </p>
                <p className="text-[0.8125rem] text-text-tertiary font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-cream pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14">
            <p className="text-[0.8125rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-3">
              What drives us
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-medium tracking-tight text-text-primary">
              Our principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Democratize AI",
                desc: "Advanced machine learning shouldn't be the exclusive domain of tech giants. We build systems that give every business access to the same calibre of AI.",
                accent: "orange",
              },
              {
                title: "Performance over promises",
                desc: "90% of our spend is optimized for real outcomes: ROAS and CPA goals. We don't sell impressions, we sell results.",
                accent: "blue",
              },
              {
                title: "Transparency and control",
                desc: "Industry-leading transparency. Real-time monitoring, brand safety controls, multi-attribution support. You see everything.",
                accent: "violet",
              },
              {
                title: "Sustainable growth",
                desc: "Five consecutive profitable years, zero debt, self-funded. We grow alongside our customers, not ahead of them.",
                accent: "orange",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="card-bordered p-8 md:p-9"
              >
                <div
                  className={`w-8 h-8 rounded-lg mb-5 flex items-center justify-center ${
                    value.accent === "orange"
                      ? "bg-orange-light"
                      : value.accent === "blue"
                      ? "bg-blue-light"
                      : "bg-violet-light"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      value.accent === "orange"
                        ? "border-orange"
                        : value.accent === "blue"
                        ? "border-blue"
                        : "border-violet"
                    }`}
                  />
                </div>
                <h3 className="text-[1.125rem] font-medium mb-3 text-text-primary">
                  {value.title}
                </h3>
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-bg-dark text-text-on-dark py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[660px] mx-auto text-center">
            <div className="w-10 h-10 rounded-lg bg-card-surface-dark flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-5 h-5 text-text-on-dark-secondary"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M6 18h4l-2 8h4l2-8V8H6v10zm14 0h4l-2 8h4l2-8V8H20v10z" />
              </svg>
            </div>
            <p className="text-[clamp(1.25rem,2.5vw,1.625rem)] font-medium leading-[1.4] mb-8 text-text-on-dark/85 italic">
              With Moloco as a partner, we&apos;ve deepened our understanding of
              high-value users and turned that understanding into scalable
              growth.
            </p>
            <div>
              <p className="text-[0.9375rem] font-medium text-text-on-dark-secondary">
                King
              </p>
              <p className="text-[0.8125rem] text-text-on-dark-tertiary">
                Global gaming leader
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-[0.8125rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-5">
              Leadership
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary mb-7">
              Built by the people who built the systems
            </h2>
            <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
              Our founding team previously built YouTube&apos;s monetization
              engine, Android Play Store advertising systems, and key search
              advertising technologies at Google.
            </p>
            <p className="text-[1rem] text-text-secondary leading-relaxed">
              Today, 700+ team members across 12+ global offices carry that same
              mission forward: making planet-scale machine learning available to
              every business in the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-warm py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-medium tracking-tight text-text-primary mb-5">
            Join us
          </h2>
          <p className="text-[1rem] text-text-secondary mb-10 max-w-[480px] mx-auto">
            We&apos;re growing fast and we&apos;re looking for people who want
            to shape the future of advertising.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="px-7 py-3.5 bg-text-primary text-bg-cream rounded-lg text-[0.9375rem] font-semibold hover:bg-grey-700 transition-colors no-underline"
            >
              View open roles
            </Link>
            <Link
              href="#"
              className="px-7 py-3.5 border border-border-medium text-text-primary rounded-lg text-[0.9375rem] font-medium hover:border-text-secondary transition-colors no-underline"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
