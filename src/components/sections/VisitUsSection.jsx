import { BUSINESS_INFO, HOURS } from "../../data/siteContent";

export function VisitUsSection() {
  return (
    <section id="visit" className="py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-5xl font-bold text-brand-charcoal mb-5">
            Join Us in Wolverine, Michigan
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-brand-oat" />
            <div className="w-2 h-2 rounded-full bg-brand-green" />
            <div className="h-px w-24 bg-brand-oat" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Location & contact */}
          <div className="rounded-2xl border border-brand-oat bg-[#f5ede3] p-10 shadow-soft">
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80 mb-8">
              Whether you're planning breakfast, lunch, dinner, or dessert, we'd love to welcome you in person. Stop by during business hours and enjoy a local dining experience built on freshness and hospitality.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="rounded-xl bg-white border border-brand-oat p-6 shadow-soft">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-sage mb-3">
                  Address
                </p>
                <p className="font-serif text-lg font-semibold text-brand-charcoal">
                  {BUSINESS_INFO.address}
                </p>
                <p className="font-sans text-brand-charcoal/70">
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </p>
              </div>

              <div className="rounded-xl bg-white border border-brand-oat p-6 shadow-soft">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-sage mb-3">
                  Contact
                </p>
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="font-serif text-lg font-semibold text-brand-charcoal hover:text-brand-green transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="font-sans text-brand-charcoal/70 mt-1">
                  Breakfast served until {BUSINESS_INFO.breakfastUntil}
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.mapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-sans text-sm font-semibold text-brand-cream shadow-soft transition-all duration-200 hover:bg-[#1e4a37] hover:-translate-y-0.5"
            >
              Open in Maps →
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-2xl bg-brand-charcoal p-10 shadow-soft">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-6">
              Hours
            </p>
            <div className="space-y-4">
              {HOURS.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-sans text-sm font-medium text-brand-cream/80">
                    {item.day}
                  </span>
                  <span className="font-serif text-sm font-bold text-brand-cream">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-white/10 p-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-sage mb-2">
                Note
              </p>
              <p className="font-sans text-sm leading-7 text-brand-cream/80">
                Breakfast is served until {BUSINESS_INFO.breakfastUntil}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
