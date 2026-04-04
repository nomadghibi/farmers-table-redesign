import { BUSINESS_INFO, HOURS } from "../../data/siteContent";

export function VisitUsSection() {
  return (
    <section
      id="visit"
      className="py-24 px-4 bg-[radial-gradient(circle_at_top_left,rgba(178,94,45,0.22),transparent_25%),linear-gradient(180deg,#7e381b_0%,#3d1406_100%)] text-[#f3e2d0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a07a] mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#f7e6d8] mb-5">
            Join Us in Wolverine, Michigan
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-[#a35e34]/60" />
            <div className="w-2 h-2 rounded-full bg-[#c9a07a]" />
            <div className="h-px w-24 bg-[#a35e34]/60" />
          </div>
        </div>

        {/* Map + Info */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-soft min-h-[420px]">
            <iframe
              title="The Farmer's Table location"
              src="https://maps.google.com/maps?q=4853+Webb+Rd,Wolverine,Michigan,49799&hl=en&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div className="bg-[#3c1b0d]/90 rounded-2xl border border-[#a35c2f] p-10 shadow-soft flex flex-col justify-between gap-8">

            {/* Address & Contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a07a] mb-3">
                  Address
                </p>
                <p className="font-serif text-lg font-bold text-[#f7e6d8]">
                  {BUSINESS_INFO.address}
                </p>
                <p className="font-sans text-[#f7e1cd]/80 mt-1">
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a07a] mb-3">
                  Contact
                </p>
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="font-serif text-lg font-bold text-[#f7e6d8] hover:text-[#c9a07a] transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="font-sans text-[#f7e1cd]/80 mt-1">
                  Breakfast until {BUSINESS_INFO.breakfastUntil}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a07a] mb-4">
                Hours
              </p>
              <div className="space-y-3">
                {HOURS.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between border-b border-[#a35c2f]/40 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-sans text-sm text-[#f7e1cd]/80">
                      {item.day}
                    </span>
                    <span className="font-serif text-sm font-bold text-[#f7e6d8]">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={BUSINESS_INFO.mapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a07a] text-[#3c1b0d] px-8 py-4 font-sans text-sm font-semibold shadow-soft transition-all duration-200 hover:bg-[#d4b48a] hover:-translate-y-0.5"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
