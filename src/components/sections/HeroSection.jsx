import { Link } from "react-router-dom";
import farmFreshImage from "../../assets/Farm-fresh goodness.png";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${farmFreshImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 via-brand-green/50 to-brand-charcoal/20" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-oat/50 bg-brand-cream/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-green shadow-sm backdrop-blur-sm">
            Farm-Fresh • Local • Handcrafted
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-brand-cream sm:text-6xl lg:text-7xl">
            Farm-to-Table Dining in Wolverine, Michigan
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-cream/90">
            Fresh local ingredients, warm hospitality, and meals made with care
            from breakfast to dinner.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/menu" 
              className="rounded-full bg-brand-green px-6 py-3.5 text-center text-sm font-semibold text-brand-cream shadow-soft transition-smooth hover:bg-[#1e4a37] hover:-translate-y-0.5"
            >
              View Our Menu
            </Link>
            <Button href="#visit" variant="secondary">
              Visit Us Today
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-oat bg-brand-cream/90 p-4 transition-smooth hover:border-brand-green hover:bg-brand-oat">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-sage">
                Breakfast
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-charcoal">
                8 AM – Noon
              </p>
            </div>
            <div className="rounded-2xl border border-brand-oat bg-brand-cream/90 p-4 transition-smooth hover:border-brand-green hover:bg-brand-oat">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-sage">
                Local Sourcing
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-charcoal">
                Michigan Ingredients
              </p>
            </div>
            <div className="rounded-2xl border border-brand-oat bg-brand-cream/90 p-4 transition-smooth hover:border-brand-green hover:bg-brand-oat">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-sage">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-charcoal">
                Wolverine, MI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
