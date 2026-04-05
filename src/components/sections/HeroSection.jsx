import { Link } from "react-router-dom";
import farmFreshImage from "../../assets/Farm-fresh goodness.webp";
import { BUSINESS_INFO } from "../../data/siteContent";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={farmFreshImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-oat/50 bg-brand-cream/90 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-green shadow-sm backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
            Farm-Fresh · Local · Handcrafted
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight text-brand-cream mb-6">
            Farm-to-Table<br />Dining in<br />
            <span className="text-brand-oat">Wolverine, MI</span>
          </h1>

          <p className="font-sans text-base sm:text-xl leading-relaxed text-brand-cream/85 max-w-xl mb-10">
            Fresh local ingredients, warm hospitality, and meals made with care — from breakfast to dinner.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row mb-14">
            <Link
              to="/menu"
              className="rounded-full bg-brand-green px-8 py-4 text-center font-sans text-sm font-semibold text-brand-cream shadow-soft transition-all duration-200 hover:bg-[#1e4a37] hover:-translate-y-0.5"
            >
              View Our Menu
            </Link>
            <a
              href="#visit"
              className="rounded-full border border-brand-cream/60 bg-brand-cream/10 px-8 py-4 text-center font-sans text-sm font-semibold text-brand-cream backdrop-blur-sm transition-all duration-200 hover:bg-brand-cream/20"
            >
              Visit Us Today
            </a>
          </div>

          {/* Quick info pills */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-xl">
            <div className="rounded-2xl border border-brand-oat/60 bg-brand-cream/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-sage">Breakfast</p>
              <p className="mt-1.5 font-serif text-lg font-semibold text-brand-charcoal">8 AM – Noon</p>
            </div>
            <div className="rounded-2xl border border-brand-oat/60 bg-brand-cream/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-sage">Sourcing</p>
              <p className="mt-1.5 font-serif text-lg font-semibold text-brand-charcoal">Michigan Farms</p>
            </div>
            <div className="rounded-2xl border border-brand-oat/60 bg-brand-cream/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-sage">Location</p>
              <p className="mt-1.5 font-serif text-lg font-semibold text-brand-charcoal">Wolverine, MI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
