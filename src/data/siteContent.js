// Site-wide content constants
export const BUSINESS_INFO = {
  name: "The Farmer's Table",
  tagline: "Farm to Table Dining",
  address: "4853 Webb Rd",
  city: "Wolverine",
  state: "Michigan",
  zip: "49799",
  phone: "231-418-2290",
  phoneLink: "tel:2314182290",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=4853+Webb+Rd+Wolverine+Michigan+49799",
  breakfastUntil: "Noon",
  year: 2026,
};

export const HIGHLIGHTS = [
  {
    title: "Locally Sourced Ingredients",
    text: "We celebrate Michigan's finest ingredients through trusted local partners, farm-fresh produce, dairy, and meats.",
  },
  {
    title: "Farm-to-Table Experience",
    text: "From breakfast to dinner, every plate is built around freshness, quality, and thoughtful preparation.",
  },
  {
    title: "Warm, Welcoming Service",
    text: "The dining experience is centered on hospitality, comfort, and a genuine small-town atmosphere.",
  },
];

export const HOURS = [
  { day: "Monday", time: "8:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 3:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 3:00 PM" },
  { day: "Thursday", time: "8:00 AM – 7:00 PM" },
  { day: "Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 7:00 PM" },
  { day: "Sunday", time: "8:00 AM – 7:00 PM" },
];

export const FEATURED_ITEMS = [
  {
    title: "Biscuits & Gravy",
    price: "From $7.25",
    description:
      "Fluffy homemade biscuits topped with rich gravy made with fresh cream-line whole milk and locally sourced sausage.",
  },
  {
    title: "Eggs Benedict",
    price: "$14",
    description:
      "Farm-fresh eggs served on a toasted English muffin with ham and velvety hollandaise sauce.",
  },
  {
    title: "Smash Burger",
    price: "$14",
    description:
      "Two juicy patties with your choice of cheese, crisp lettuce, ripe tomato, onion, pickles, and mayo.",
  },
  {
    title: "Serendipity Farms Fried Chicken",
    price: "$14",
    description:
      "Crispy, golden fried chicken served with comforting sides and farm-to-table flavor.",
  },
  {
    title: "New York Strip Steak",
    price: "$30",
    description:
      "A guest favorite steak dinner served with fresh vegetables, potato, and side salad.",
  },
  {
    title: "Fresh Baked Pie",
    price: "From $5",
    description:
      "Freshly baked pies and dessert favorites that bring a homemade finish to every meal.",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Farmers Table Gift Card",
    price: 25,
    image: "/images/gift-card.jpg",
    description: "Perfect for any occasion - treat someone to an unforgettable farm-to-table dining experience.",
    category: "Gift Cards",
  },
  {
    id: 2,
    name: "Michigan Maple Syrup",
    price: 18,
    image: "/images/maple-syrup.jpg",
    description: "Pure Michigan maple syrup harvested from local trees. 8 oz bottle.",
    category: "Local Products",
  },
  {
    id: 3,
    name: "Farmers Table T-Shirt",
    price: 28,
    image: "/images/tshirt.jpg",
    description: "Comfortable cotton t-shirt featuring our logo. Available in S, M, L, XL.",
    category: "Merchandise",
  },
  {
    id: 12,
    name: "Serendipity Farms Heritage Train",
    price: 55,
    image: "/images/train-set.jpg",
    description: "A limited-edition collectible celebrating The Farmer's Table brand and local farm heritage.",
    category: "Merchandise",
  },
  {
    id: 4,
    name: "Takeout Breakfast Box",
    price: 15,
    image: "/images/breakfast-box.jpg",
    description: "Our famous biscuits & gravy with fresh fruit and coffee. Ready to go!",
    category: "Takeout",
  },
  {
    id: 5,
    name: "Local Honey Collection",
    price: 22,
    image: "/images/honey.jpg",
    description: "Raw, unfiltered honey from Michigan beekeepers. 12 oz jar.",
    category: "Local Products",
  },
  {
    id: 6,
    name: "Farmers Table Mug",
    price: 16,
    image: "/images/mug.jpg",
    description: "Ceramic mug with our logo. Perfect for your morning coffee.",
    category: "Merchandise",
  },
  {
    id: 7,
    name: "Farmers Table Hat",
    price: 24,
    image: "/images/hat.jpg",
    description: "Classic baseball cap with embroidered logo. Adjustable fit for all sizes.",
    category: "Merchandise",
  },
  {
    id: 8,
    name: "Grass-Fed Steaks",
    price: 45,
    image: "/images/steaks.jpg",
    description: "Premium grass-fed beef steaks, naturally raised without chemicals or hormones. 8-12 oz cuts.",
    category: "Local Products",
  },
  {
    id: 9,
    name: "Farm-Fresh Eggs",
    price: 8,
    image: "/images/eggs.jpg",
    description: "Organic, free-range eggs from pasture-raised hens. No chemicals, just pure farm freshness.",
    category: "Local Products",
  },
  {
    id: 10,
    name: "Heritage Chicken",
    price: 18,
    image: "/images/chicken.jpg",
    description: "Whole heritage breed chicken, raised naturally without chemicals or antibiotics. Approximately 4-5 lbs.",
    category: "Local Products",
  },
  {
    id: 11,
    name: "Pasture-Raised Pork",
    price: 32,
    image: "/images/pork.jpg",
    description: "Humanely raised pork from pasture-farmed pigs. No chemicals, no hormones, just natural goodness.",
    category: "Local Products",
  },
  {
    id: 13,
    name: "Fresh Hay Candle",
    price: 18,
    image: "/images/candle.jpg",
    description: "Breathe in the warmth of a Michigan barn at golden hour. Hand-poured soy wax, 40-hour burn time.",
    category: "Farmhouse Candles",
  },
  {
    id: 14,
    name: "Apple Orchard Candle",
    price: 18,
    image: "/images/candle.jpg",
    description: "Crisp Michigan apples and a hint of autumn spice — like a walk through the orchard in October.",
    category: "Farmhouse Candles",
  },
  {
    id: 15,
    name: "Vanilla Farmhouse Candle",
    price: 18,
    image: "/images/candle.jpg",
    description: "Warm, creamy vanilla with a touch of woodsmoke — the comfort of the farmhouse kitchen in every flame.",
    category: "Farmhouse Candles",
  },
  {
    id: 16,
    name: "Pine Woods Candle",
    price: 18,
    image: "/images/candle.jpg",
    description: "Northern Michigan pine and cedar — clean, grounding, and wild. Brings the forest right to your table.",
    category: "Farmhouse Candles",
  },
  {
    id: 17,
    name: "Farmhouse Salt & Pepper Shakers",
    price: 24,
    image: "/images/salt-pepper.jpg",
    description: "Rustic ceramic salt and pepper shakers with that worn farmhouse charm. A timeless addition to any table — or a gift they'll actually use.",
    category: "Farmhouse Kitchen",
  },
  {
    id: 18,
    name: "Rustic Farm Toy Set",
    price: 32,
    image: "/images/farm-toys.jpg",
    description: "Wooden farm animals and vehicles, hand-finished with a rustic touch. A timeless gift for little ones who love the farm life.",
    category: "Farmhouse Kitchen",
  },
  {
    id: 19,
    name: "Farm Life Still Life Print",
    price: 38,
    image: "/images/still-life.jpg",
    description: "A beautifully composed farm life scene — perfect for a kitchen wall, dining room, or as a gift that captures the spirit of northern Michigan.",
    category: "Farmhouse Kitchen",
  },
  {
    id: 20,
    name: "Rustic Toy Buggy",
    price: 28,
    image: "/images/toy-buggy.jpg",
    description: "A charming hand-finished wooden toy buggy with farmhouse character. A nostalgic keepsake for kids and collectors alike.",
    category: "Farmhouse Kitchen",
  },
  {
    id: 21,
    name: "Farmhouse Market Gift Basket",
    price: 54,
    image: "/images/market-basket.jpg",
    description: "A curated farmhouse market display basket filled with local Michigan goods — honey, maple syrup, preserves, and seasonal charm. The perfect gift.",
    category: "Gift Baskets",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Serendipity Farms", href: "/serendipity-farms" },
  { label: "Visit Us", href: "#visit" },
  { label: "Storefront", href: "/storefront" },
];
