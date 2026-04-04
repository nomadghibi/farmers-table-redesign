import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MenuCard } from "../components/ui/MenuCard";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/util/SEO";
import { MENU_DATA } from "../data/menu";

export function MenuPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <SEO
        title="Menu"
        description="Browse The Farmer's Table full menu featuring farm-to-table breakfast, lunch, dinner, bakery items, and desserts made with locally-sourced Michigan ingredients."
        canonical="https://farmerstable.com/menu"
      />
      <Header />

      {/* Storefront Hero */}
      <section className="relative overflow-hidden bg-brand-green py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green/90 to-brand-green/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-oat">
              Our Menu
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-brand-cream sm:text-6xl lg:text-7xl">
              Farm-to-Table Dining
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-brand-oat/90">
              Fresh local ingredients, thoughtful preparation, and genuine hospitality
              served from breakfast to dinner.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#breakfast" variant="accent" size="lg">
                View Breakfast
              </Button>
              <Button href="#lunch" variant="secondary" size="lg">
                View Lunch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories - Storefront Style */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {MENU_DATA.map((category, index) => (
            <div
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, '')}
              className={index > 0 ? "mt-32" : ""}
            >
              {/* Category Header */}
              <div className="mb-16 text-center">
                <div className="mx-auto max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage">
                    {category.category}
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold text-brand-charcoal sm:text-5xl">
                    {category.category}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-brand-charcoal/80">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative overflow-hidden rounded-[32px] border border-brand-oat bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-brand-charcoal group-hover:text-brand-green transition-colors">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-brand-charcoal/70">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-brand-green">
                          ${item.price}
                        </span>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="h-px flex-1 bg-gradient-to-r from-brand-oat to-transparent" />
                      <div className="mx-4 rounded-full bg-brand-green/10 px-3 py-1">
                        <span className="text-xs font-medium text-brand-green uppercase tracking-wide">
                          Local
                        </span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-brand-oat to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Storefront CTA */}
      <section className="bg-brand-charcoal py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-brand-cream sm:text-5xl">
              Ready to Experience Our Menu?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-brand-cream/80">
              Visit us in Wolverine, Michigan for farm-to-table dining that celebrates
              local ingredients and genuine hospitality.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:2314182290" variant="accent" size="lg">
                Call 231-418-2290
              </Button>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=4853+Webb+Rd+Wolverine+Michigan+49799"
                variant="secondary"
                size="lg"
                external
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
