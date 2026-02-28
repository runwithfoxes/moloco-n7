import Link from "next/link";

const insights = [
  {
    tag: "Report",
    title: "The state of AI-powered advertising: 2025 and beyond",
    excerpt:
      "How machine learning is reshaping the advertising landscape for independent apps and retailers, with data from 250,000+ advertisers across 3 million apps.",
    gradient: "from-[#C8DC39]/20 via-[#C8DC39]/8 to-[#f5f7f4]",
    stat: "250K+",
    statLabel: "advertisers",
    featured: true,
  },
  {
    tag: "Case Study",
    title: "How King scaled user acquisition with ML-driven campaigns",
    excerpt:
      "With Moloco as a partner, King deepened their understanding of high-value users and turned that into scalable growth across their gaming portfolio.",
    gradient: "from-[#8BC34A]/20 via-[#8BC34A]/8 to-[#f5f7f4]",
    stat: "3.4x",
    statLabel: "lower acquisition cost",
    featured: true,
  },
  {
    tag: "Product",
    title: "Introducing real-time bidding optimization for streaming",
    excerpt:
      "Our new AI-native ad stack for streaming providers maximizes revenue while balancing viewer experience and advertiser performance.",
    featured: false,
  },
  {
    tag: "Industry",
    title: "Why re-engagement campaigns deliver 685% greater ROAS",
    excerpt:
      "New data shows re-engaging existing users costs 3.4x less than acquiring new ones, with dramatically better return on ad spend.",
    featured: false,
  },
  {
    tag: "Report",
    title:
      "Beyond walled gardens: the rise of the independent app ecosystem",
    excerpt:
      "2 billion daily active users across 3 million independent apps represent a massive, untapped opportunity for marketers willing to look beyond the usual platforms.",
    featured: false,
  },
  {
    tag: "Case Study",
    title: "Wayfair: scaling commerce media with deep learning",
    excerpt:
      "How Wayfair partnered with Moloco to deliver personalized onsite ads that blend seamlessly with the shopping experience.",
    featured: false,
  },
];

export default function Insights() {
  const featured = insights.filter((i) => i.featured);
  const rest = insights.filter((i) => !i.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-16 md:pt-44 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[720px]">
            <p className="text-[0.75rem] font-medium text-text-on-dark-tertiary uppercase tracking-[0.08em] mb-5">
              Insights
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight mb-4 text-text-on-dark">
              Knowledge hub
            </h1>
            <p className="text-[clamp(1rem,1.3vw,1.1875rem)] leading-relaxed text-text-on-dark-secondary">
              Our reports, articles, guides, videos, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((item) => (
              <Link
                key={item.title}
                href="#"
                className="group block no-underline"
              >
                <div className={`rounded-lg aspect-[16/10] relative overflow-hidden mb-4 bg-gradient-to-b ${item.gradient} border border-border-light flex flex-col items-center justify-center p-6`}>
                  <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium text-text-primary/10 font-[family-name:var(--font-dm-sans)] mb-1">
                    {item.stat}
                  </p>
                  <p className="text-[0.75rem] text-text-tertiary">{item.statLabel}</p>
                  <div className="absolute top-4 left-4">
                    <span className="tag-badge">{item.tag}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-border-medium flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-3.5 h-3.5 text-text-secondary"
                      fill="none"
                      viewBox="0 0 16 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 12L12 4M12 4H6M12 4v6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.25rem] font-medium mb-2 group-hover:text-text-secondary transition-colors text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="divider-line" />
      </div>

      {/* All insights */}
      <section className="bg-bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[0.75rem] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-10">
            All publications
          </p>

          <div className="space-y-0">
            {rest.map((item) => (
              <Link
                key={item.title}
                href="#"
                className="group block py-7 border-b border-border-light no-underline first:border-t"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="tag-badge shrink-0">{item.tag}</span>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-medium mb-2 group-hover:text-text-secondary transition-colors text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-[0.9375rem] text-text-secondary leading-relaxed max-w-[600px]">
                      {item.excerpt}
                    </p>
                  </div>
                  <span className="text-text-tertiary group-hover:text-text-primary transition-colors text-[1.125rem] shrink-0 hidden md:block">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-bg-dark text-text-on-dark py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[520px] mx-auto text-center">
            <p className="text-[0.8125rem] font-medium text-text-on-dark-tertiary uppercase tracking-[0.08em] mb-5">
              Stay informed
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight mb-5">
              Get the latest from Moloco
            </h2>
            <p className="text-[1rem] text-text-on-dark-secondary mb-10">
              Research, product updates, and insights from the frontier of
              AI-powered advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-card-surface-dark border border-border-dark-medium rounded-lg text-[0.875rem] text-text-on-dark placeholder:text-text-on-dark-tertiary focus:outline-none focus:border-text-on-dark-secondary"
              />
              <button className="px-5 py-3 bg-accent text-bg-dark rounded-lg text-[0.875rem] font-semibold hover:bg-accent-hover transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
