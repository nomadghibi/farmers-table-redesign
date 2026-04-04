import { Button } from "../ui/Button";
import { BUSINESS_INFO, HOURS } from "../../data/siteContent";

export function VisitUsSection() {
  return (
    <section id="visit" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rounded-[32px] border border-stone-200 bg-stone-50 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Visit Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Join us in Wolverine, Michigan
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Whether you're planning breakfast, lunch, dinner, or dessert,
            we'd love to welcome you in person. Stop by during normal
            business hours and enjoy a local dining experience built on
            freshness and hospitality.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Address
              </p>
              <p className="mt-3 text-lg font-semibold text-stone-900">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-stone-600">
                {BUSINESS_INFO.city}, {BUSINESS_INFO.state}{" "}
                {BUSINESS_INFO.zip}
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Contact
              </p>
              <a
                href={BUSINESS_INFO.phoneLink}
                className="mt-3 block text-lg font-semibold text-stone-900 hover:text-emerald-800"
              >
                {BUSINESS_INFO.phone}
              </a>
              <p className="mt-1 text-stone-600">
                Breakfast served until {BUSINESS_INFO.breakfastUntil}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button
              href={BUSINESS_INFO.mapsQuery}
              variant="primary"
              external
            >
              Open in Maps
            </Button>
          </div>
        </div>

        <div className="rounded-[32px] border border-stone-200 bg-stone-900 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Hours
          </p>
          <div className="mt-6 space-y-4">
            {HOURS.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between border-b border-white/10 pb-4 text-sm"
              >
                <span className="font-medium text-stone-200">{item.day}</span>
                <span className="font-semibold text-white">{item.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Note
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-200">
              Breakfast is currently served until{" "}
              {BUSINESS_INFO.breakfastUntil}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
