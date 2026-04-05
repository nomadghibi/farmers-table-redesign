import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/util/SEO";
import { BUSINESS_INFO } from "../data/siteContent";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <SEO
        title="Contact Us"
        description="Get in touch with The Farmer's Table in Wolverine, Michigan. Call us or fill out our contact form and we'll respond within 24 hours."
        canonical="https://farmerstable.com/contact"
      />
      <Header />

      {/* Hero */}
      <section className="bg-brand-charcoal py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
            Reach Out
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-cream md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-cream/70">
            Have questions about our menu, hours, or special events? We'd love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <SectionHeading
                eyebrow="Send us a message"
                title="We respond within 24 hours"
                description="Fill out the form below and we'll get back to you as soon as possible."
                className="mb-8 text-left md:text-left"
              />

              {submitted ? (
                <div className="rounded-[28px] border border-brand-oat bg-brand-green/10 p-8 text-center">
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="text-2xl font-bold text-brand-green">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-brand-charcoal/70">
                    We've received your message and will respond soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-stone-900"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-stone-900"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-stone-900"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-stone-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Tell us what you'd like to know..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-brand-cream transition hover:bg-[#1e4a37]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Other ways to reach us"
                title="We're here to help"
                description="Prefer to call or visit? We've got you covered."
                className="mb-8 text-left md:text-left"
              />

              <div className="rounded-[28px] border border-brand-oat bg-white p-8 shadow-soft">
                <h3 className="text-lg font-bold text-brand-charcoal">Call Us</h3>
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="mt-3 block text-2xl font-bold text-brand-green hover:text-[#1e4a37]"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="mt-2 text-brand-charcoal/60">
                  Monday – Sunday, during business hours
                </p>
              </div>

              <div className="rounded-[28px] border border-brand-oat bg-white p-8 shadow-soft">
                <h3 className="text-lg font-bold text-brand-charcoal">Visit Us</h3>
                <p className="mt-3 text-lg font-semibold text-brand-charcoal">
                  {BUSINESS_INFO.address}
                </p>
                <p className="mt-1 text-brand-charcoal/60">
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state}{" "}
                  {BUSINESS_INFO.zip}
                </p>
                <Button
                  href={BUSINESS_INFO.mapsQuery}
                  variant="primary"
                  size="sm"
                  className="mt-4"
                  external
                >
                  Open in Maps
                </Button>
              </div>

              <div className="rounded-[28px] border border-brand-oat bg-brand-green/10 p-8">
                <h3 className="text-lg font-bold text-brand-charcoal">
                  Hours of Operation
                </h3>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-brand-charcoal">Mon</span>
                    <span className="text-brand-charcoal/70">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-brand-charcoal">Tue–Wed</span>
                    <span className="text-brand-charcoal/70">8:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-brand-charcoal">Thu–Sun</span>
                    <span className="text-brand-charcoal/70">8:00 AM – 7:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-brand-charcoal/60">
                  Breakfast served until noon daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
