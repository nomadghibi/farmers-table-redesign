import { Link } from "react-router-dom";
import { MenuCard } from "../ui/MenuCard";
import { FEATURED_ITEMS } from "../../data/siteContent";
import biscuitsImage from "../../assets/Biscuits and gravy menu design.png";
import eggsBenedictImage from "../../assets/Eggs Benedict cozy delight.png";
import smashBurgerImage from "../../assets/Smash burger with local ingredients.png";
import friedChickenImage from "../../assets/Farm-fresh fried chicken delight.png";
import steakImage from "../../assets/Steak dinner with local goodness.png";
import pieImage from "../../assets/Freshly baked pies with love.png";

const FEATURED_IMAGES = {
  "Biscuits & Gravy": biscuitsImage,
  "Eggs Benedict": eggsBenedictImage,
  "Smash Burger": smashBurgerImage,
  "Serendipity Farms Fried Chicken": friedChickenImage,
  "New York Strip Steak": steakImage,
  "Fresh Baked Pie": pieImage,
};

export function FeaturedMenuSection() {
  return (
    <section id="menu" className="py-24 px-4 bg-[#f5ede3]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
            Featured Menu
          </p>
          <h2 className="font-serif text-5xl font-bold text-brand-charcoal mb-5">
            Signature Favorites
          </h2>
          <p className="font-sans text-lg text-brand-charcoal/70 max-w-xl mx-auto">
            A few house favorites from breakfast, lunch, dinner, and dessert — crafted fresh daily.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="h-px w-24 bg-brand-oat" />
            <div className="w-2 h-2 rounded-full bg-brand-green" />
            <div className="h-px w-24 bg-brand-oat" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_ITEMS.map((item) => (
            <MenuCard
              key={item.title}
              name={item.title}
              price={item.price}
              description={item.description}
              image={FEATURED_IMAGES[item.title]}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-sans text-sm font-semibold text-brand-cream shadow-soft transition-all duration-200 hover:bg-[#1e4a37] hover:-translate-y-0.5"
          >
            View Full Menu
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
