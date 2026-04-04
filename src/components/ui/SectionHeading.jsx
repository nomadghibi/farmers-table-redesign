export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
