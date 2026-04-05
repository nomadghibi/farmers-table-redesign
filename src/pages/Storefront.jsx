import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { BUSINESS_INFO, HIGHLIGHTS, HOURS, PRODUCTS } from "../data/siteContent";
import storefrontImage from "../assets/storefront.png";
import giftCardImage from "../assets/gift25.png";
import tshirtImage from "../assets/Tshirt.png";
import mugImage from "../assets/Rustic farmhouse coffee moment.png";
import mapleSyrupImage from "../assets/Maple syrup from local farms.png";
import honeyImage from "../assets/Local honey collection display.png";
import breakfastBoxImage from "../assets/Farm fresh breakfast, rustic takeout vibe.png";
import hatImage from "../assets/hat.png";
import farmFreshImage from "../assets/Farm-fresh goodness.png";
import pasturePlateImage from "../assets/Pasture to plate farmhouse still life.png";
import eggsImage from "../assets/Farm-fresh eggs from happy hens.png";
import chickenImage from "../assets/Farm-to-table heritage chicken advertisement.png";
import porkImage from "../assets/Pasture-raised pork from Serendipity Farms.png";
import steaksImage from "../assets/Premium grass-fed steaks for sale.png";
import trainImage from "../assets/Pasture to plate farmhouse still life.png";
import vintageSignImage from "../assets/Vintage farmhouse diner sign print.png";
import goldenHourImage from "../assets/Golden hour.png";
import candleImage from "../assets/Farmhouse candles and seasonal charm.png";
import saltPepperImage from "../assets/Farmhouse salt and pepper shakers.png";
import farmToysImage from "../assets/Rustic farm toys on a wooden table.png";
import stillLifeImage from "../assets/Rustic farm life still life scene.png";
import toyBuggyImage from "../assets/Rustic farmhouse toy buggy vignette.png";
import marketBasketImage from "../assets/Farmhouse market display with rustic charm.png";

export function StorefrontPage() {
  const { addToCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedIds, setAddedIds] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // Create products with actual imported images
  const productImageMap = {
    "Farmers Table Gift Card": giftCardImage,
    "Farmers Table T-Shirt": tshirtImage,
    "Farmers Table Mug": mugImage,
    "Michigan Maple Syrup": mapleSyrupImage,
    "Local Honey Collection": honeyImage,
    "Takeout Breakfast Box": breakfastBoxImage,
    "Farmers Table Hat": hatImage,
    "Serendipity Farms Heritage Train": trainImage,
    "Grass-Fed Steaks": steaksImage,
    "Farm-Fresh Eggs": eggsImage,
    "Heritage Chicken": chickenImage,
    "Pasture-Raised Pork": porkImage,
    "Fresh Hay Candle": candleImage,
    "Apple Orchard Candle": candleImage,
    "Vanilla Farmhouse Candle": candleImage,
    "Pine Woods Candle": candleImage,
    "Farmhouse Salt & Pepper Shakers": saltPepperImage,
    "Rustic Farm Toy Set": farmToysImage,
    "Farm Life Still Life Print": stillLifeImage,
    "Rustic Toy Buggy": toyBuggyImage,
    "Farmhouse Market Gift Basket": marketBasketImage,
  };

  const productsWithImages = PRODUCTS.map((product) => ({
    ...product,
    image: productImageMap[product.name] || product.image,
  }));

  const categories = ["All", ...new Set(productsWithImages.map(product => product.category))];
  const filteredProducts = selectedCategory === "All" 
    ? productsWithImages 
    : productsWithImages.filter(product => product.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${storefrontImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-brand-cream px-4">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Welcome to The Farmer's Table
          </h1>
          <p className="font-sans text-base sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the warmth of farm-to-table dining in the heart of Wolverine, Michigan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Menu
            </Button>
            <Button variant="secondary" size="lg">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story + Experience Highlights */}
      <section className="py-24 px-4 bg-[radial-gradient(circle_at_top_left,rgba(178,94,45,0.22),transparent_25%),linear-gradient(180deg,#7e381b_0%,#3d1406_100%)] text-[#f3e2d0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 rounded-[2rem] border border-[#a35e34]/50 bg-[#3c1b0d]/90 p-6 sm:p-8 md:p-12 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.9)] backdrop-blur-sm flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 min-w-0">
              <SectionHeading className="text-[#f7e6d8]">
                Our Heritage Story
              </SectionHeading>
              <p className="font-sans text-lg text-[#f7e1cd] leading-relaxed mb-6">
                The Farmer's Table is more than a restaurant – it's a celebration of Wolverine's agricultural heritage and the hardworking families who make our community thrive. We believe in supporting local farmers, preserving traditional farming practices, and creating connections between our guests and the land that sustains us.
              </p>
              <p className="font-sans text-lg text-[#f7e1cd] leading-relaxed">
                When you dine with us, you're not just enjoying a meal – you're participating in a story that spans generations, honoring the farmers, artisans, and community members who make northern Michigan's food culture so special.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
              <img
                src={farmFreshImage}
                alt="Farm-fresh goodness at Farmer's Table"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((highlight, index) => (
              <div
                key={index}
                className="bg-[#e7c9b4] rounded-3xl p-8 border border-[#a35c2f] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_46px_-18px_rgba(0,0,0,0.55)] transition-shadow duration-300"
              >
                <h3 className="font-serif text-2xl font-semibold text-[#5c2816] mb-4">
                  {highlight.title}
                </h3>
                <p className="font-sans text-[#4a2d1f] leading-relaxed">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Menu Bar */}
      <section className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-oat/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-1 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-brand-green text-brand-cream shadow-soft"
                      : "text-brand-charcoal hover:bg-brand-oat hover:text-brand-green"
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
            {cartCount > 0 && (
              <Link
                to="/checkout"
                className="ml-4 flex items-center gap-2 bg-brand-green text-brand-cream px-4 py-2 rounded-full font-sans text-sm font-semibold shadow-soft hover:bg-[#1e4a37] transition-all duration-200"
              >
                <span>🛒</span>
                <span>{cartCount} · Checkout</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading className="text-center mb-16">
            Shop Our Store
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-brand-oat flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                      {product.name}
                    </h3>
                    <span className="font-sans text-lg font-bold text-brand-green sm:ml-2 shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-brand-charcoal/80 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs uppercase tracking-wider text-brand-sage">
                      {product.category}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-200 ${
                        addedIds[product.id]
                          ? "bg-brand-sage text-brand-cream cursor-default"
                          : "bg-brand-green text-brand-cream hover:bg-[#1e4a37] hover:-translate-y-0.5"
                      }`}
                    >
                      {addedIds[product.id] ? "Added ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Roots + Sign — Side by Side */}
      <section className="py-24 px-4 bg-[radial-gradient(circle_at_top_right,rgba(193,113,51,0.18),transparent_35%),linear-gradient(180deg,#7a2f18_0%,#3c1708_100%)] text-[#f2ddc8]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 rounded-[2rem] border border-[#b07a52]/40 bg-[#3f1d11]/90 p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex-1 min-w-0">
            <SectionHeading className="text-[#f5e3cf]">
              Deeply Rooted in Our Community
            </SectionHeading>
            <p className="font-sans text-lg leading-relaxed mb-8 text-[#f7e1cb]">
              The Farmer's Table is more than a restaurant – it's a celebration of Wolverine's agricultural heritage and the hardworking families who make our community thrive. We believe in supporting local farmers, preserving traditional farming practices, and creating connections between our guests and the land that sustains us.
            </p>
            <p className="font-sans text-lg leading-relaxed text-[#f7e1cb]">
              When you dine with us, you're not just enjoying a meal – you're participating in a story that spans generations, honoring the farmers, artisans, and community members who make northern Michigan's food culture so special.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={vintageSignImage}
              alt="Vintage Farmer's Table diner sign"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-4 bg-brand-charcoal text-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={goldenHourImage}
              alt="Golden hour at Farmer's Table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-4xl font-bold mb-8">
              Ready to Experience Farm-to-Table Dining?
            </h2>
            <p className="font-sans text-xl mb-12 leading-relaxed">
              Join us for an unforgettable meal crafted with love, served with warmth, and rooted in tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="accent" size="lg">
                <a href={BUSINESS_INFO.mapsQuery} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href={BUSINESS_INFO.phoneLink}>
                  Call Now
                </a>
              </Button>
              <Link to="/menu">
                <Button variant="primary" size="lg">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
}