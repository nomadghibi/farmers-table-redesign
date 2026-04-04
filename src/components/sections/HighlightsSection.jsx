import { SectionHeading } from "../ui/SectionHeading";
import { HIGHLIGHTS } from "../../data/siteContent";

export function HighlightsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Guests Choose Us"
          title="Fresh ingredients, thoughtful cooking, and a place that feels worth coming back to"
          description="We are committed to quality, local sourcing, and a warm dining experience."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-stone-200 bg-stone-50 p-8 shadow-sm transition-smooth hover:-translate-y-1 hover:shadow-md"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-900 text-white transition-smooth group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
