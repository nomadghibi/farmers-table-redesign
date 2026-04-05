import { SectionHeading } from "../ui/SectionHeading";
import goldenHourImage from "../../assets/Golden hour.webp";

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Rooted in Local Farms and Honest Food"
            description="The Farmer's Table brings Michigan-grown ingredients together with warm hospitality and thoughtful preparation."
          />
          <div className="space-y-5 text-base leading-8 text-brand-charcoal">
            <p>
              Our menu is shaped by Michigan farms, local creameries, and
              producers who share our commitment to quality. From pasture-raised
              meats to farm-fresh eggs, every ingredient is chosen with care.
            </p>
            <p>
              Dining here should feel warm, welcoming, and beautifully simple.
              Whether it's breakfast, lunch, dinner, or bakery items to take
              home, our kitchen delivers honest, thoughtful food with a local
              point of view.
            </p>
            <p>
              The Farmer's Table is a place where farm-to-table values meet a
              relaxed, refined dining experience — grounded in community and
              built around real ingredients.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[28px] border border-brand-oat shadow-soft">
            <img
              src={goldenHourImage}
              alt="Golden hour farm scene"
              className="h-52 sm:h-64 lg:h-80 w-full object-cover"
            />
          </div>

          <div className="rounded-[28px] border border-brand-oat bg-brand-oat p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
              Farm Focus
            </p>
            <h3 className="mt-3 text-2xl font-bold text-brand-charcoal">
              Pasture to Plate
            </h3>
            <p className="mt-4 leading-7 text-brand-charcoal">
              Our story centers on local sourcing, farm-fresh products, and
              trusted partners like Serendipity Farms.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-brand-oat bg-brand-cream p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-brand-charcoal">
                Breakfast to Dinner
              </h4>
              <p className="mt-3 text-sm leading-7 text-brand-charcoal">
                A warm, all-day destination offering breakfast, lunch, dinner,
                bakery favorites, desserts, and craft beverages.
              </p>
            </div>
            <div className="rounded-[28px] border border-brand-oat bg-brand-cream p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-brand-charcoal">
                Local Hospitality
              </h4>
              <p className="mt-3 text-sm leading-7 text-brand-charcoal">
                Relaxed service, genuine welcome, and a comfortable space for
                neighbors and visitors alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
