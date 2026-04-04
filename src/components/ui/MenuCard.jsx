export function MenuCard({ name, price, description }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-brand-oat bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
      {/* Badge strip */}
      <div className="bg-brand-green/10 border-b border-brand-oat -mx-7 -mt-7 px-7 py-2.5 mb-5 flex items-center justify-between">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-green">
          House Favorite
        </span>
        <span className="text-brand-green/40 text-lg">✦</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-serif text-xl font-bold text-brand-charcoal transition-colors group-hover:text-brand-green leading-snug">
          {name}
        </h3>
        <span className="font-serif text-lg font-bold text-brand-green whitespace-nowrap">
          {price}
        </span>
      </div>
      <p className="font-sans text-sm leading-7 text-brand-charcoal/70 flex-1">{description}</p>
    </article>
  );
}
