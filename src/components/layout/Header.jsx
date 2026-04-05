import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { BUSINESS_INFO, NAV_LINKS } from "../../data/siteContent";
import { useCart } from "../../context/CartContext";
import logoImage from "../../assets/logo.webp";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const desktopLinks = NAV_LINKS.filter((link) => link.label !== "Home");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-oat/80 bg-brand-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="The Farmer's Table logo"
            className="h-14 w-14 rounded-full p-1 shadow-soft"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight text-brand-charcoal">
              {BUSINESS_INFO.name}
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-brand-sage">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {desktopLinks.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-brand-charcoal hover:text-brand-green transition"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal hover:text-brand-green transition"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button href={BUSINESS_INFO.phoneLink} variant="secondary" size="sm">
            Call Now
          </Button>
          <Button href={BUSINESS_INFO.mapsQuery} variant="primary" size="sm" external>
            Get Directions
          </Button>
          {cartCount > 0 && (
            <button
              onClick={() => navigate("/checkout")}
              className="flex items-center gap-1.5 bg-brand-green text-brand-cream px-4 py-2 rounded-full font-sans text-sm font-semibold shadow-soft hover:bg-[#1e4a37] transition-all duration-200"
            >
              🛒 <span>{cartCount}</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-brand-oat bg-brand-cream p-2 text-brand-charcoal shadow-sm md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-brand-oat bg-brand-cream md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {desktopLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex flex-col gap-3 pt-2">
              <Button href={BUSINESS_INFO.phoneLink} variant="secondary" className="w-full">
                Call Now
              </Button>
              <Button href={BUSINESS_INFO.mapsQuery} variant="primary" className="w-full" external>
                Get Directions
              </Button>
              {cartCount > 0 && (
                <button
                  onClick={() => { navigate("/checkout"); setMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-green text-brand-cream py-3 rounded-full font-sans text-sm font-semibold shadow-soft hover:bg-[#1e4a37] transition-all duration-200"
                >
                  🛒 Go to Checkout ({cartCount})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
