import { HIGHLIGHTS } from "../../data/siteContent";

const ICONS = ["🌾", "🍽️", "🤝"];

export function HighlightsSection() {
  return (
    <section className="py-24 px-4 bg-[radial-gradient(circle_at_top_left,rgba(178,94,45,0.22),transparent_25%),linear-gradient(180deg,#7e381b_0%,#3d1406_100%)] text-[#f3e2d0]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a07a] mb-3">
            Why Guests Choose Us
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#f7e6d8] mb-5">
            Fresh, Local & Genuine
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-[#a35e34]/60" />
            <div className="w-2 h-2 rounded-full bg-[#c9a07a]" />
            <div className="h-px w-24 bg-[#a35e34]/60" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#3c1b0d]/90 rounded-3xl p-8 border border-[#a35c2f] shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{ICONS[index]}</div>
              <h3 className="font-serif text-2xl font-bold text-[#f7e6d8] mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-[#f7e1cd]/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
