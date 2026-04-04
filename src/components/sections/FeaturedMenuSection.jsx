import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/SectionHeading";
import { MenuCard } from "../ui/MenuCard";
import { Button } from "../ui/Button";
import { FEATURED_ITEMS } from "../../data/siteContent";

export function FeaturedMenuSection() {
  return (
    <section id="menu" className="bg-stone-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Menu"
          title="A few signature favorites from breakfast, lunch, dinner, and dessert"
          description="Browse the full menu with all categories and items."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_ITEMS.map((item) => (
            <MenuCard
              key={item.title}
              name={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/menu"
            className="inline-flex rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
