import { Button } from "../ui/Button";
import { BUSINESS_INFO } from "../../data/siteContent";

export function CTASection() {
  return (
    <section className="bg-emerald-950 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
          Breakfast • Lunch • Dinner • Bakery • Desserts
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          A warm, farm-inspired dining experience for locals, families, and
          travelers alike
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href={BUSINESS_INFO.phoneLink}
            variant="accent"
          >
            Call {BUSINESS_INFO.phone}
          </Button>
          <Button
            href={BUSINESS_INFO.mapsQuery}
            variant="outline"
            external
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
