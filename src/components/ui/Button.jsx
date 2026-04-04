export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-full transition-smooth inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-brand-green text-brand-cream shadow-soft hover:bg-[#1e4a37] hover:-translate-y-0.5",
    secondary:
      "border border-brand-green text-brand-green bg-brand-cream hover:bg-brand-oat hover:shadow-sm hover:-translate-y-0.5",
    accent:
      "bg-brand-gold text-brand-charcoal hover:bg-[#d4a648] hover:shadow-sm hover:-translate-y-0.5",
    outline:
      "border border-brand-cream text-brand-cream hover:bg-white/15 hover:shadow-sm hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const style = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={style}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
