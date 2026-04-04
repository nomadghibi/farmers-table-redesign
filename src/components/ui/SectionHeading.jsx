export function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal md:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 font-sans text-base leading-7 text-brand-charcoal/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
