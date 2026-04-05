import { useState } from "react";
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
import smashBurgerImage from "../assets/Smash burger with local ingredients.png";
import grilledCheeseImage from "../assets/Grilled cheese and tomato soup.png";
import pulledPorkImage from "../assets/Pulled pork sandwich with coleslaw.png";
import saladImage from "../assets/Farm-fresh salad lunch menu.png";
import chickenSandwichImage from "../assets/Rustic chicken sandwich menu design.png";
import potRoastImage from "../assets/Farmhouse pot roast with comfort and care.png";
import friedChickenImage from "../assets/Farm-fresh fried chicken delight.png";
import steakDinnerImage from "../assets/Steak dinner with local goodness.png";
import grilledChickenBreastDinnerImage from "../assets/Grilled Chicken Breast Dinner savory hand-crafted.png";
import slowRoastedRoastBeefImage from "../assets/Slow-Roasted Roast Beef fork-tender farm dinner.png";
import porkChopWithApplesImage from "../assets/Pork Chop with Apples Michigan farm dinner.png";
import ribEyeImage from "../assets/Rib Eye marbled steak farm dinner.png";
import fishImage from "../assets/Pan-seared fish of the day.png";
import shortRibsImage from "../assets/Braised short ribs with root vegetables.png";
import porkChopImage from "../assets/Farm-to-table pork chop dinner.png";
import vegetarianImage from "../assets/Vegetarian feast on a farmhouse menu.png";
import pieImage from "../assets/Freshly baked pies with love.png";
import cakeImage from "../assets/Chocolate layer cake with farmhouse charm.png";
import tartImage from "../assets/Seasonal fruit tart and fresh flavors.png";
import cinnamonRollImage from "../assets/Rustic cinnamon roll bakery advertisement.png";
import breadPuddingImage from "../assets/Comforting bread pudding delight.png";
import cookieImage from "../assets/Freshly baked cookie assortment.png";
import cornedBeefHashImage from "../assets/Farmhouse corned beef hash delight.png";
import omeletImage from "../assets/Egg-ceptional omelets and farm freshness.png";
import taylorHamImage from "../assets/Rustic breakfast feast advertisement.png";
import campfireSkilletImage from "../assets/Campfire skillet breakfast adventure.png";
import spicySkilletImage from "../assets/Farm-fresh spicy skillet breakfast scramble.png";
import cornedBeefHashSkilletImage from "../assets/Farmhouse corned beef hash skillet.png";
import loadedSkilletImage from "../assets/Loaded skillet breakfast feast.png";
import veggieSkilletImage from "../assets/Farmhouse veggie skillet breakfast poster.png";
import blueberryPancakesImage from "../assets/Blueberry or chocolate chip pancakes.png";
import pancakesWithMeatImage from "../assets/Hearty farmhouse pancake breakfast.png";
import frenchToastImage from "../assets/Belgian waffle with farm-fresh toppings.png";
import frenchToastImage2 from "../assets/Farm-fresh French toast breakfast delight.png";
import farmhouseBreakfastImage from "../assets/Farmhouse breakfast goodness on the table.png";
import steakEggsImage from "../assets/Steak and eggs from Serendipity Farms.png";
import hamEggsImage from "../assets/Farm-fresh ham and eggs breakfast.png";
import syrupsImage from "../assets/Farmhouse syrup lineup with vintage flair.png";
import buildYourOwnImage from "../assets/Serendipity Farms breakfast menu.png";
import bowlOfChiliImage from "../assets/Warm bowl of homemade chili.png";
import chickpeaCurryImage from "../assets/Chickpea curry bowl with rustic charm.png";
import grilledChickenSandwichImage from "../assets/Grilled chicken sandwich from our farm.png";
import chickenWafflesImage from "../assets/Chicken and waffles Southern classic.png";
import wingDingsImage from "../assets/Crispy wings bold flavors good times.png";
import phillySteakImage from "../assets/Serendipity Farms Philly steak sandwich.png";
import reubenImage from "../assets/Vintage Reuben sandwich advertisement design.png";
import hotBeefImage from "../assets/Hot beef sandwich with comfort sides.png";
import monteCristoImage from "../assets/Comfort food from Serendipity Farms.png";
import chickenTenderBasketImage from "../assets/Serendipity Farms chicken tender basket.png";
import loadedGrilledCheeseImage from "../assets/Loaded grilled cheese goodness.png";
import bltImage from "../assets/Serendipity Farms classic BLT sandwich.png";
import fishSandwichImage from "../assets/Farmhouse fish sandwich delight.png";
import bleuCheeseBurgerImage from "../assets/Serendipity Farms burger indulgence.png";
import oliveBurgerImage from "../assets/Serendipity Farms burger and fries.png";
import frenchFriesImage from "../assets/Farmhouse fries fresh from the farm.png";
import deepFriedMushroomsImage from "../assets/Serendipity Farms deep fried mushrooms.png";
import zucchiniFriesImage from "../assets/Farm-fresh fried favorites menu.png";
import sweetPotatoFriesImage from "../assets/Rustic farm sweet potato fries ad.png";
import onionRingsImage from "../assets/Farm-fresh onion rings delight.png";
import farmersSaladImage from "../assets/Farmers Salad country garden creation.png";
import houseSaladImage from "../assets/House Salad garden fresh classic.png";
import chickenCaesarSaladImage from "../assets/Chicken Caesar Salad farm to bowl classic.png";
import dressingsImage from "../assets/Dressings house-crafted farm-fresh.png";
import blackBeanBurgerImage from "../assets/Black Bean Burger hand-crafted original.png";
import spicedSweetPotatoBurgerImage from "../assets/Spiced Sweet Potato Cranberry Burger.png";

const ITEM_IMAGES = {
  "Biscuits & Gravy": biscuitsImage,
  "Eggs Benedict": eggsBenedictImage,
  "Hash & Eggs": hashEggsImage,
  "Corned Beef Hash": cornedBeefHashImage,
  "Egg-straordinary Omeletes": omeletImage,
  "Taylor Ham Breakfast": taylorHamImage,
  "Campfire Skillet": campfireSkilletImage,
  "Spicy Skillet Breakfast Scramble": spicySkilletImage,
  "Corned Beef Hash Skillet": cornedBeefHashSkilletImage,
  "Loaded Skillet": loadedSkilletImage,
  "Veggie Skillet": veggieSkilletImage,
  "Blueberry or Chocolate Chip Pancakes": blueberryPancakesImage,
  "Pancakes with Meat": pancakesWithMeatImage,
  "Belgian Waffle": frenchToastImage,
  "French Toast": frenchToastImage2,
  "Farmhouse Breakfast": farmhouseBreakfastImage,
  "Steak & Eggs": steakEggsImage,
  "Ham & Eggs": hamEggsImage,
  "Syrups": syrupsImage,
  "Build Your Own Breakfast": buildYourOwnImage,
  "Bowl of Chili": bowlOfChiliImage,
  "Chickpea Curry Bowl": chickpeaCurryImage,
  "Grilled Chicken Breast Sandwich": grilledChickenSandwichImage,
  "Chicken and Waffles": chickenWafflesImage,
  "Chicken Wing-dings": wingDingsImage,
  "Philly Steak & Cheese": phillySteakImage,
  "Reuben Sandwich": reubenImage,
  "Hot Beef Sandwich": hotBeefImage,
  "Monte Cristo": monteCristoImage,
  "Chicken Tender Basket": chickenTenderBasketImage,
  "Loaded Grilled Cheese": loadedGrilledCheeseImage,
  "BLT": bltImage,
  "Walleye or Cod Fish Sandwich": fishSandwichImage,
  "Bleu Cheese Burger": bleuCheeseBurgerImage,
  "Olive Burger": oliveBurgerImage,
  "French Fries": frenchFriesImage,
  "Deep Fried Mushrooms": deepFriedMushroomsImage,
  "Zucchini Fries": zucchiniFriesImage,
  "Sweet Potato Fries": sweetPotatoFriesImage,
  "Onion Rings": onionRingsImage,
  "Farmers Salad": farmersSaladImage,
  "House Salad": houseSaladImage,
  "Chicken Caesar Salad": chickenCaesarSaladImage,
  "Dressings": dressingsImage,
  "Black Bean Burger": blackBeanBurgerImage,
  "Spiced Sweet Potato Cranberry Burger": spicedSweetPotatoBurgerImage,
  "Pancakes or French Toast": pancakesImage,
  "Breakfast Sandwich": breakfastSandwichImage,
  "Fresh Fruit Plate": freshFruitImage,
  "Smash Burger": smashBurgerImage,
  "Grilled Cheese & Tomato Soup": grilledCheeseImage,
  "Pulled Pork Sandwich": pulledPorkImage,
  "Salad Garden": saladImage,
  "Chicken Sandwich": chickenSandwichImage,
  "Pot Roast": potRoastImage,
  "Serendipity Farms Fried Chicken": friedChickenImage,
  "New York Strip Steak": steakDinnerImage,
  "Grilled Chicken Breast Dinner": grilledChickenBreastDinnerImage,
  "Slow-Roasted Roast Beef": slowRoastedRoastBeefImage,
  "Pork Chop with Apples": porkChopWithApplesImage,
  "Rib Eye": ribEyeImage,
  "Pan-Seared Fish of the Day": fishImage,
  "Braised Short Ribs": shortRibsImage,
  "Pork Chop Two Ways": porkChopImage,
  "Vegetarian Feast": vegetarianImage,
  "Fresh Baked Pie": pieImage,
  "Chocolate Layer Cake": cakeImage,
  "Seasonal Tart": tartImage,
  "Cinnamon Roll": cinnamonRollImage,
  "Bread Pudding": breadPuddingImage,
  "Cookie Assortment": cookieImage,
};
import breakfastIcon from "../assets/Farmhouse breakfast delights emblem.png";
import lunchIcon from "../assets/Vintage lunch plate with farmhouse backdrop.png";
import dinnerIcon from "../assets/dinner-section-icon.png";
import bakeryIcon from "../assets/Bakery & desserts icon.png";
import beveragesIcon from "../assets/A variety of refreshing beverages.png";
import sidesIcon from "../assets/Homemade chips and vintage farm style.png";
import heartyClassicsIcon from "../assets/Farmhouse breakfast at sunrise.png";
import saladsIcon from "../assets/Farm-fresh salad with rustic charm.png";
import skilletsIcon from "../assets/Rustic farm skillet breakfast scene.png";
import veganIcon from "../assets/Vegan delights at The Farmers Table.png";

const CATEGORY_ICONS = {
  Breakfast: "🌅",
  Skillets: "🍳",
  "Hearty Classics": "🥞",
  Lunch: "🥗",
  Sides: "🍟",
  Salads: "🥬",
  "Vegan Delights": "🌱",
  Dinner: "🍽️",
  "Bakery Delights": "🥐",
  "Bakery & Desserts": "🥧",
  Beverages: "☕",
};

const CATEGORY_IMAGE_SIZES = {
  Dinner: "mx-auto mb-6 w-64 h-64 rounded-full object-contain block",
};

const CATEGORY_IMAGES = {
  Breakfast: breakfastIcon,
  Lunch: lunchIcon,
  Dinner: dinnerIcon,
  "Bakery & Desserts": bakeryIcon,
  Beverages: beveragesIcon,
  Sides: sidesIcon,
  "Hearty Classics": heartyClassicsIcon,
  Salads: saladsIcon,
  Skillets: skilletsIcon,
  "Vegan Delights": veganIcon,
};

const ITEM_BADGES = ["Farm-Fresh", "House-Made", "Local Favorite", "Seasonal", "Signature"];

function getBadge(index) {
  return ITEM_BADGES[index % ITEM_BADGES.length];
}

function categoryId(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

export function MenuPage() {
  const [lightbox, setLightbox] = useState(null);


  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-3xl w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/80 transition"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
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
          className={`py-24 px-4 scroll-mt-20 ${catIndex % 2 === 0 ? "bg-brand-cream" : "bg-[#f5ede3]"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-16">
              {CATEGORY_IMAGES[category.category] ? (
                <img
                  src={CATEGORY_IMAGES[category.category]}
                  alt={`${category.category} at The Farmer's Table`}
                  className={CATEGORY_IMAGE_SIZES[category.category] ?? "mx-auto mb-6 w-48 h-48 rounded-full object-cover block"}
                />
              ) : (
                <div className="mx-auto mb-6 w-48 h-48 rounded-full bg-brand-oat flex items-center justify-center text-6xl">
                  {CATEGORY_ICONS[category.category]}
                </div>
              )}
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
                    <div
                      className="relative h-72 overflow-hidden cursor-zoom-in"
                      onClick={() => setLightbox({ src: ITEM_IMAGES[item.name], alt: item.name })}
                    >
                      <img
                        src={ITEM_IMAGES[item.name]}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 font-sans text-xs font-semibold uppercase tracking-widest text-brand-green bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                        {getBadge(itemIndex)} ✦
                      </span>
                      <span className="absolute bottom-3 right-3 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        ⤢
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
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-green transition-colors mb-2 leading-snug">
                      {item.name}
                    </h3>
                    {!ITEM_IMAGES[item.name] && (
                      <p className="font-sans text-sm leading-relaxed text-brand-charcoal/70 flex-1">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-brand-oat">
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

      {/* Image Disclaimer */}
      <div className="bg-brand-cream border-t border-brand-oat py-4 px-4 text-center">
        <p className="font-sans text-xs text-brand-charcoal/50 italic">
          * Food images are for presentation purposes only and may not reflect the exact appearance of menu items.
        </p>
      </div>

      <Footer />
    </div>
  );
}
