export function MenuCard({ name, price, description }) {
  return (
    <article className="group rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm transition-smooth hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-stone-900 transition-smooth group-hover:text-emerald-900">
          {name}
        </h3>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900 whitespace-nowrap transition-smooth group-hover:bg-amber-200">
          {price}
        </span>
      </div>
      <p className="leading-7 text-stone-600 transition-smooth group-hover:text-stone-700">{description}</p>
    </article>
  );
}
