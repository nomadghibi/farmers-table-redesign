import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/util/SEO";
import { SectionHeading } from "../components/ui/SectionHeading";
import goldenHourImage from "../assets/Golden hour.png";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="About Us"
        description="Learn the story behind The Farmer's Table. Discover our commitment to local sourcing, quality ingredients, and genuine hospitality in Wolverine, Michigan."
        canonical="https://farmerstable.com/about"
      />
      <Header />

      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${goldenHourImage})`,
            filter: "brightness(1.08) saturate(1.08)",
          }}
        />
        <div className="absolute inset-0 bg-brand-green/70" />
        <div className="relative mx-auto max-w-5xl px-4 text-center text-brand-cream sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-oat">
            Our Story
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Rooted in Wolverine. Guided by flavor, care, and community.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-oat/90">
            A warm, local restaurant built around thoughtful ingredients, genuine hospitality, and a deep respect for Michigan’s farms.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="space-y-8 text-base leading-8 text-brand-charcoal">
            <p>
              The Farmer’s Table began with a simple promise: serve food that feels honest, thoughtful, and unmistakably local. We believe great dining starts with ingredients that are sourced with care and prepared with heart.
            </p>
            <p>
              Here in Wolverine, Michigan, our kitchen follows the rhythm of the seasons. From breakfast to dinner, our menu is shaped by nearby farms, local creameries, and producers whose commitment to quality reflects our own.
            </p>
            <p>
              We proudly partner with Serendipity Farms for pasture-raised meats, alongside local growers and makers who care deeply about the land and the food it provides. Knowing where our ingredients come from makes every dish more meaningful and every meal more memorable.
            </p>
            <p>
              At The Farmer’s Table, dining is a chance to slow down, connect, and enjoy the kind of hospitality that feels like coming home. Whether you’re stopping in for morning coffee, a relaxed lunch, or a special dinner, you’ll find genuine care in every bite.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-brand-oat bg-brand-cream p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Seasonal Menus
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-charcoal">
                Inspired by the harvest
              </h2>
              <p className="mt-4 text-brand-charcoal/80">
                We celebrate each season with dishes that highlight the freshest local ingredients and simple, honest cooking.
              </p>
            </div>

            <div className="rounded-[28px] border border-brand-oat bg-brand-cream p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Trusted Local Partners
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-charcoal">
                Farm relationships matter
              </h2>
              <p className="mt-4 text-brand-charcoal/80">
                Our team works with growers, creameries, and bakers who share our values and care for the land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="These principles guide everything we do"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">🌾</div>
              <h3 className="text-xl font-bold text-stone-900">Local First</h3>
              <p className="mt-3 leading-7 text-stone-600">
                We prioritize local farmers and producers. Supporting our
                community is not just good business—it's the right thing to do.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">✨</div>
              <h3 className="text-xl font-bold text-stone-900">Quality Always</h3>
              <p className="mt-3 leading-7 text-stone-600">
                We never compromise on quality. Every ingredient is chosen with
                care, and every dish is prepared with intention.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">🤝</div>
              <h3 className="text-xl font-bold text-stone-900">
                Genuine Hospitality
              </h3>
              <p className="mt-3 leading-7 text-stone-600">
                Hospitality isn't just a service—it's a value. We treat every
                guest like family and every visit like it matters.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">🌱</div>
              <h3 className="text-xl font-bold text-stone-900">Sustainability</h3>
              <p className="mt-3 leading-7 text-stone-600">
                We care for the land and the people who grow our food. Sustainable
                practices today ensure a better tomorrow.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">👨‍🍳</div>
              <h3 className="text-xl font-bold text-stone-900">Craftsmanship</h3>
              <p className="mt-3 leading-7 text-stone-600">
                Our kitchen team takes pride in their work. Every plate is
                prepared with skill, creativity, and passion.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
              <div className="mb-4 text-4xl font-bold text-emerald-900">❤️</div>
              <h3 className="text-xl font-bold text-stone-900">Community</h3>
              <p className="mt-3 leading-7 text-stone-600">
                We're more than a restaurant. We're a gathering place for our
                neighbors and a proud part of Wolverine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
