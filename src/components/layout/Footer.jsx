import { BUSINESS_INFO, NAV_LINKS } from "../../data/siteContent";
import logoImage from "../../assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-oat bg-brand-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="The Farmer's Table logo"
              className="h-14 w-14 rounded-full p-1 shadow-soft"
            />
            <div>
              <p className="text-lg font-semibold text-brand-charcoal">
                {BUSINESS_INFO.name}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-sage">
                {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-brand-charcoal">
            Farm-to-table dining celebrating local ingredients, thoughtful
            preparation, and genuine hospitality.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-sage">
            Quick Links
          </h3>
          <div className="mt-5 space-y-3">
            {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-brand-charcoal hover:text-brand-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS_INFO.phoneLink}
              className="block text-brand-charcoal hover:text-brand-green"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-sage">
            Visit
          </h3>
          <div className="mt-5 space-y-3 text-brand-charcoal">
            <p>{BUSINESS_INFO.address}</p>
            <p>
              {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
            </p>
            <a href={BUSINESS_INFO.phoneLink} className="block text-brand-green hover:text-[#1e4a37]">
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.mapsQuery}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-brand-green hover:text-[#1e4a37]"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-oat">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-brand-sage sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {BUSINESS_INFO.year} Reliable Web Studio / Best Computer Tech LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
