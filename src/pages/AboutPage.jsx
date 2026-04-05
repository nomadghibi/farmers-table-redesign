import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/util/SEO";
import { Button } from "../components/ui/Button";
import { BUSINESS_INFO } from "../data/siteContent";
import goldenHourImage from "../assets/Golden hour.png";
import storefrontImage from "../assets/storefront.png";
import pasturePlateImage from "../assets/Pasture to plate farmhouse still life.png";
import chickenImage from "../assets/Farm-to-table heritage chicken advertisement.png";
import eggsImage from "../assets/Farm-fresh eggs from happy hens.png";
import porkImage from "../assets/Pasture-raised pork from Serendipity Farms.png";

const VALUES = [
  {
    icon: "🌾",
    title: "Local First",
    body: "We prioritize local farmers and producers. Supporting our community is not just good business — it's the right thing to do.",
  },
  {
    icon: "✨",
    title: "Quality Always",
    body: "Every ingredient is chosen with care, and every dish is prepared with intention. We never compromise on what lands on your plate.",
  },
  {
    icon: "🤝",
    title: "Genuine Hospitality",
    body: "Hospitality isn't just a service — it's a value. We treat every guest like family and every visit like it matters.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    body: "We care for the land and the people who grow our food. Sustainable practices today ensure a better tomorrow.",
  },
  {
    icon: "👨‍🍳",
    title: "Craftsmanship",
    body: "Our kitchen team takes pride in their work. Every plate is prepared with skill, creativity, and genuine passion.",
  },
  {
    icon: "❤️",
    title: "Community",
    body: "We're more than a restaurant. We're a gathering place for our neighbors and a proud part of Wolverine.",
  },
];

const PARTNERS = [
  {
    image: chickenImage,
    name: "Serendipity Farms",
    role: "Pasture-Raised Meats",
    description:
      "Heritage-breed chicken and pasture-raised pork raised with care and respect for the land right here in northern Michigan.",
  },
  {
    image: eggsImage,
    name: "Local Egg Farmers",
    role: "Farm-Fresh Eggs",
    description:
      "Happy hens, fresh eggs. Our breakfast starts with eggs gathered from free-range flocks within miles of our kitchen.",
  },
  {
    image: porkImage,
    name: "Regional Creameries",
    role: "Dairy & Cheese",
    description:
      "Whole milk, local cheddar, and artisan cheeses sourced from Michigan creameries that share our commitment to quality.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <SEO
        title="About Us"
        description="Learn the story behind The Farmer's Table. Discover our commitment to local sourcing, quality ingredients, and genuine hospitality in Wolverine, Michigan."
        canonical="https://farmerstable.com/about"
      />
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${goldenHourImage})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-brand-cream px-4 max-w-4xl mx-auto">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-oat mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Rooted in Wolverine.<br className="hidden md:block" /> Guided by Flavor & Community.
          </h1>
          <p className="font-sans text-base sm:text-xl text-brand-oat/90 max-w-2xl mx-auto leading-relaxed">
            A warm, local restaurant built around thoughtful ingredients, genuine hospitality, and a deep respect for Michigan's farms.
          </p>
        </div>
      </section>

      {/* Origin Story — side by side */}
      <section className="py-24 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 min-w-0 space-y-6">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage">
              How It Started
            </p>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal leading-snug">
              A Promise to Serve Food That Feels Honest
            </h2>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              The Farmer's Table began with a simple promise: serve food that feels honest, thoughtful, and unmistakably local. We believe great dining starts with ingredients that are sourced with care and prepared with heart.
            </p>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              Here in Wolverine, Michigan, our kitchen follows the rhythm of the seasons. From breakfast to dinner, our menu is shaped by nearby farms, local creameries, and producers whose commitment to quality reflects our own.
            </p>
            <p className="font-sans text-lg leading-relaxed text-brand-charcoal/80">
              At The Farmer's Table, dining is a chance to slow down, connect, and enjoy the kind of hospitality that feels like coming home — whether you're stopping in for morning coffee, a relaxed lunch, or a special dinner.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-[460px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={storefrontImage}
              alt="The Farmer's Table storefront"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Farm Partners */}
      <section className="py-24 px-4 bg-[radial-gradient(circle_at_top_left,rgba(178,94,45,0.22),transparent_25%),linear-gradient(180deg,#7e381b_0%,#3d1406_100%)] text-[#f3e2d0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a07a] mb-3">
              Who We Work With
            </p>
            <h2 className="font-serif text-5xl font-bold text-[#f7e6d8] mb-5">
              Our Farm Partners
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-[#a35e34]/60" />
              <div className="w-2 h-2 rounded-full bg-[#c9a07a]" />
              <div className="h-px w-24 bg-[#a35e34]/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#3c1b0d]/90 rounded-2xl border border-[#a35c2f] overflow-hidden shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#c9a07a] mb-1">
                    {partner.role}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#f7e6d8] mb-3">
                    {partner.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#f7e1cd]/80">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[#f5ede3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
              Our Values
            </p>
            <h2 className="font-serif text-5xl font-bold text-brand-charcoal mb-5">
              What We Stand For
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-brand-oat" />
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <div className="h-px w-24 bg-brand-oat" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl border border-brand-oat p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
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

      {/* Pasture plate — side by side with CTA */}
      <section className="py-24 px-4 bg-brand-charcoal text-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img
              src={pasturePlateImage}
              alt="Pasture to plate at Farmer's Table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-4">
              Come Visit
            </p>
            <h2 className="font-serif text-5xl font-bold mb-6 leading-tight">
              Experience It Yourself
            </h2>
            <p className="font-sans text-xl leading-relaxed text-brand-cream/80 mb-10">
              From the first sip of morning coffee to the last bite of house-made pie, every moment at The Farmer's Table is crafted with love and rooted in Michigan's finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button variant="accent" size="lg">View Our Menu</Button>
              </Link>
              <Button variant="secondary" size="lg">
                <a href={BUSINESS_INFO.phoneLink}>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
