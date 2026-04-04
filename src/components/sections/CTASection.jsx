import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../../data/siteContent";
import breakfastBoxImage from "../../assets/Farm fresh breakfast, rustic takeout vibe.png";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-brand-charcoal text-brand-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
          <img
            src={breakfastBoxImage}
            alt="Farm fresh breakfast at The Farmer's Table"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-4">
            Breakfast · Lunch · Dinner · Bakery · Desserts
          </p>
          <h2 className="font-serif text-5xl font-bold leading-tight mb-6">
            A Warm, Farm-Inspired Dining Experience
          </h2>
          <p className="font-sans text-xl leading-relaxed text-brand-cream/80 mb-10">
            For locals, families, and travelers alike — a place where every meal feels like coming home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="rounded-full bg-brand-green px-8 py-4 text-center font-sans text-sm font-semibold text-brand-cream shadow-soft transition-all duration-200 hover:bg-[#1e4a37] hover:-translate-y-0.5"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.mapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-cream/40 px-8 py-4 text-center font-sans text-sm font-semibold text-brand-cream transition-all duration-200 hover:bg-brand-cream/10"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
