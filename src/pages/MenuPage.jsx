import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/util/SEO";
import { MENU_DATA } from "../data/menu";
import heroImage from "../assets/Farm fresh breakfast, rustic takeout vibe.png";
import biscuitsImage from "../assets/Biscuits and gravy menu design.png";
import eggsBenedictImage from "../assets/Eggs Benedict cozy delight.png";
import hashEggsImage from "../assets/Hash and eggs breakfast delight.png";
import pancakesImage from "../assets/Pancakes or French toast breakfast special.png";
import breakfastSandwichImage from "../assets/Farmhouse breakfast sandwich delight.png";
import freshFruitImage from "../assets/Fresh fruit plate with rustic charm.png";

const ITEM_IMAGES = {
  "Biscuits & Gravy": biscuitsImage,
  "Eggs Benedict": eggsBenedictImage,
  "Hash & Eggs": hashEggsImage,
  "Pancakes or French Toast": pancakesImage,
  "Breakfast Sandwich": breakfastSandwichImage,
  "Fresh Fruit Plate": freshFruitImage,
};
import breakfastIcon from "../assets/Delicious morning sunrise breakfast scene.png";
import lunchIcon from "../assets/Fresh lunch spread on a plate.png";
import dinnerIcon from "../assets/Farm-to-table dinner at sunset.png";
import bakeryIcon from "../assets/Bakery & desserts icon.png";
import beveragesIcon from "../assets/A variety of refreshing beverages.png";

const CATEGORY_ICONS = {
  Breakfast: "🌅",
  Lunch: "🥗",
  Dinner: "🍽️",
  "Bakery & Desserts": "🥧",
  Beverages: "☕",
};

const CATEGORY_IMAGES = {
  Breakfast: breakfastIcon,
  Lunch: lunchIcon,
  Dinner: dinnerIcon,
  "Bakery & Desserts": bakeryIcon,
  Beverages: beveragesIcon,
};

const ITEM_BADGES = ["Farm-Fresh", "House-Made", "Local Favorite", "Seasonal", "Signature"];

function getBadge(index) {
  return ITEM_BADGES[index % ITEM_BADGES.length];
}

function categoryId(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

export function MenuPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <SEO
        title="Menu"
        description="Browse The Farmer's Table full menu featuring farm-to-table breakfast, lunch, dinner, bakery items, and desserts made with locally-sourced Michigan ingredients."
        canonical="https://farmerstable.com/menu"
      />
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-brand-cream px-4 max-w-4xl mx-auto">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-oat mb-4">
            Wolverine, Michigan
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Our Menu
          </h1>
          <p className="font-sans text-xl md:text-2xl text-brand-oat/90 max-w-2xl mx-auto leading-relaxed">
            Farm-fresh ingredients, house-made recipes, and genuine Northern Michigan hospitality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {MENU_DATA.map((cat) => (
              <a
                key={cat.category}
                href={`#${categoryId(cat.category)}`}
                className="font-sans text-sm font-medium px-5 py-2 rounded-full border border-brand-cream/50 text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal transition-all duration-200"
              >
                {CATEGORY_ICONS[cat.category]} {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      {MENU_DATA.map((category, catIndex) => (
        <section
          key={category.category}
          id={categoryId(category.category)}
          className={`py-24 px-4 ${catIndex % 2 === 0 ? "bg-brand-cream" : "bg-[#f5ede3]"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-16">
              <img
                src={CATEGORY_IMAGES[category.category]}
                alt={`${category.category} at The Farmer's Table`}
                className="mx-auto mb-6 w-48 h-48 rounded-full object-cover block"
              />
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
                {category.description}
              </p>
              <h2 className="font-serif text-5xl font-bold text-brand-charcoal mb-5">
                {category.category}
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-24 bg-brand-oat" />
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                <div className="h-px w-24 bg-brand-oat" />
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <div
                  key={item.name}
                  className="group bg-white rounded-2xl border border-brand-oat shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Item image if available */}
                  {ITEM_IMAGES[item.name] && (
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={ITEM_IMAGES[item.name]}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 font-sans text-xs font-semibold uppercase tracking-widest text-brand-green bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                        {getBadge(itemIndex)} ✦
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {!ITEM_IMAGES[item.name] && (
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-green mb-3 block">
                        {getBadge(itemIndex)} ✦
                      </span>
                    )}
                    {!ITEM_IMAGES[item.name] && (
                      <>
                        <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-green transition-colors mb-3 leading-snug">
                          {item.name}
                        </h3>
                        <p className="font-sans text-sm leading-relaxed text-brand-charcoal/70 flex-1">
                          {item.description}
                        </p>
                      </>
                    )}
                    <div className="flex items-center justify-between pt-5 mt-5 border-t border-brand-oat">
                      <span className="font-sans text-xs uppercase tracking-wider text-brand-sage">
                        {category.category}
                      </span>
                      <span className="font-serif text-lg font-bold text-brand-green">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-charcoal py-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-4">
            Come Find Us
          </p>
          <h2 className="font-serif text-5xl font-bold text-brand-cream mb-6">
            Come Dine With Us
          </h2>
          <p className="font-sans text-xl leading-8 text-brand-cream/80 mb-10">
            Visit us in Wolverine, Michigan for farm-to-table dining that
            celebrates local ingredients and genuine hospitality.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
      </section>

      <Footer />
    </div>
  );
}
