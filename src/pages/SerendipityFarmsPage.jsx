import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/util/SEO";
import { Button } from "../components/ui/Button";
import { BUSINESS_INFO } from "../data/siteContent";
import goldenHourImage from "../assets/Golden hour.png";
import chickenImage from "../assets/Farm-to-table heritage chicken advertisement.png";
import porkImage from "../assets/Pasture-raised pork from Serendipity Farms.png";
import eggsImage from "../assets/Farm-fresh eggs from happy hens.png";
import steaksImage from "../assets/Premium grass-fed steaks for sale.png";
import pasturePlateImage from "../assets/Pasture to plate farmhouse still life.png";

const PRODUCTS = [
  {
    image: chickenImage,
    name: "Heritage Chicken",
    badge: "Free-Range",
    description:
      "Slow-raised heritage-breed chickens with room to roam. No antibiotics, no shortcuts — just clean, flavorful birds the way nature intended.",
    keywords: "pasture-raised heritage chicken northern Michigan",
  },
  {
    image: porkImage,
    name: "Pasture-Raised Pork",
    badge: "No Hormones",
    description:
      "Happy pigs raised on open pasture in northern Michigan. Rich, marbled, and full of flavor that only comes from animals raised with care.",
    keywords: "pasture-raised pork Serendipity Farms Michigan",
  },
  {
    image: eggsImage,
    name: "Farm-Fresh Eggs",
    badge: "Free-Range Hens",
    description:
      "Golden yolks from hens that roam freely and eat well. Gathered daily and delivered fresh — the backbone of our breakfast menu.",
    keywords: "farm fresh eggs free range Michigan",
  },
  {
    image: steaksImage,
    name: "Grass-Fed Beef",
    badge: "100% Grass-Fed",
    description:
      "Michigan-raised grass-fed beef with exceptional flavor and nutrition. No feedlots, no additives — just honest beef from healthy animals.",
    keywords: "grass-fed beef Michigan local farm",
  },
];

const VALUES = [
  { icon: "🌿", title: "No Antibiotics. Ever.", body: "Animals are never treated with growth-promoting antibiotics or hormones. What you see is what nature grew." },
  { icon: "☀️", title: "Open Pasture", body: "Every animal at Serendipity Farms has access to open land, fresh air, and room to behave naturally." },
  { icon: "🌾", title: "Michigan Grown", body: "Rooted in northern Michigan soil. Supporting Serendipity Farms means supporting local land, local families, and local food systems." },
  { icon: "🤝", title: "Direct Partnership", body: "We source directly from the farm — no middlemen, no mystery. From their fields to your plate, the chain is short and transparent." },
];

export function SerendipityFarmsPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <SEO
        title="Serendipity Farms | Our Farm Partner"
        description="Serendipity Farms is The Farmer's Table's trusted local farm partner in northern Michigan. Pasture-raised heritage chicken, grass-fed beef, farm-fresh eggs, and pasture-raised pork — raised naturally, without antibiotics or hormones, right here in Michigan."
        canonical="https://farmerstable.com/serendipity-farms"
        ogImage={chickenImage}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${goldenHourImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-brand-cream px-4 max-w-4xl mx-auto">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-oat mb-4">
            Our Farm Partner · Wolverine, Michigan
          </p>
          <h1 className="font-serif text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Serendipity<br />Farms
          </h1>
          <p className="font-sans text-xl md:text-2xl text-brand-oat/90 max-w-2xl mx-auto leading-relaxed mb-10">
            Pasture-raised meats, farm-fresh eggs, and a commitment to natural farming that feeds everything we put on your plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="primary" size="lg">See Our Menu</Button>
            </Link>
            <Link to="/storefront">
              <Button variant="secondary" size="lg">Shop Farm Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Farm Story — side by side */}
      <section className="py-24 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-shrink-0 w-full md:w-[460px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={porkImage}
              alt="Pasture-raised pork from Serendipity Farms, northern Michigan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 space-y-6">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage">
              The Farm Behind the Food
            </p>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal leading-snug">
              Raised with Respect. Served with Pride.
            </h2>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              Serendipity Farms is a northern Michigan farm dedicated to raising animals the right way — on open pasture, without antibiotics or added hormones, and with deep respect for the land and the animals in their care.
            </p>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              The Farmer's Table sources heritage chicken, pasture-raised pork, farm-fresh eggs, and grass-fed beef directly from Serendipity Farms. No middlemen. No mystery ingredients. Just clean, local food from people we trust.
            </p>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              When you dine with us, you're supporting a small family farm in northern Michigan — one that proves the best food is grown close to home, with intention and care.
            </p>
          </div>
        </div>
      </section>

      {/* What They Raise */}
      <section className="py-24 px-4 bg-[radial-gradient(circle_at_top_left,rgba(178,94,45,0.22),transparent_25%),linear-gradient(180deg,#7e381b_0%,#3d1406_100%)] text-[#f3e2d0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a07a] mb-3">
              From Serendipity Farms
            </p>
            <h2 className="font-serif text-5xl font-bold text-[#f7e6d8] mb-5">
              What They Raise
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-[#a35e34]/60" />
              <div className="w-2 h-2 rounded-full bg-[#c9a07a]" />
              <div className="h-px w-24 bg-[#a35e34]/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="bg-[#3c1b0d]/90 rounded-2xl border border-[#a35c2f] overflow-hidden shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - Serendipity Farms northern Michigan`}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#c9a07a] mb-1">
                    {product.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#f7e6d8] mb-3">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#f7e1cd]/80">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Values */}
      <section className="py-24 px-4 bg-[#f5ede3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
              How They Farm
            </p>
            <h2 className="font-serif text-5xl font-bold text-brand-charcoal mb-5">
              The Serendipity Standard
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-brand-oat" />
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <div className="h-px w-24 bg-brand-oat" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl border border-brand-oat p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-brand-charcoal/70">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasture to plate CTA — side by side */}
      <section className="py-24 px-4 bg-brand-charcoal text-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-4">
              Pasture to Plate
            </p>
            <h2 className="font-serif text-5xl font-bold mb-6 leading-tight">
              Taste the Difference of Real Farm Food
            </h2>
            <p className="font-sans text-xl leading-relaxed text-brand-cream/80 mb-10">
              Every Serendipity Farms product on our menu and in our storefront is a direct connection to the land, the animals, and the people who raise them right here in northern Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button variant="accent" size="lg">View Our Menu</Button>
              </Link>
              <Link to="/storefront">
                <Button variant="secondary" size="lg">Shop Farm Products</Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={pasturePlateImage}
              alt="Pasture to plate dining at The Farmer's Table featuring Serendipity Farms"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
