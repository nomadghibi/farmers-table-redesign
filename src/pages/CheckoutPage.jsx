import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useCart } from "../context/CartContext";
import { BUSINESS_INFO } from "../data/siteContent";

export function CheckoutPage() {
  const { items, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "pickup",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "A valid email is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="max-w-lg w-full text-center bg-white rounded-2xl border border-brand-oat shadow-soft p-12">
            <div className="text-6xl mb-6">🌾</div>
            <h1 className="font-serif text-4xl font-bold text-brand-charcoal mb-4">
              Order Received!
            </h1>
            <p className="font-sans text-lg text-brand-charcoal/70 leading-relaxed mb-8">
              Thank you, <strong>{form.name}</strong>! We've got your order and will be in touch at <strong>{form.email}</strong> to confirm details and pickup time.
            </p>
            <div className="bg-[#f5ede3] rounded-xl p-5 mb-8 text-left">
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-sage mb-2">Questions?</p>
              <a href={BUSINESS_INFO.phoneLink} className="font-serif text-lg font-bold text-brand-green hover:text-[#1e4a37] transition">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <Link
              to="/storefront"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-sans text-sm font-semibold text-brand-cream shadow-soft hover:bg-[#1e4a37] transition-all duration-200"
            >
              ← Back to Store
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="max-w-md w-full text-center bg-white rounded-2xl border border-brand-oat shadow-soft p-12">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="font-serif text-3xl font-bold text-brand-charcoal mb-4">Your cart is empty</h1>
            <p className="font-sans text-brand-charcoal/70 mb-8">Head back to the store and pick out something good.</p>
            <Link
              to="/storefront"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-sans text-sm font-semibold text-brand-cream shadow-soft hover:bg-[#1e4a37] transition-all duration-200"
            >
              Browse the Store
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page heading */}
          <div className="mb-12">
            <Link to="/storefront" className="font-sans text-sm text-brand-sage hover:text-brand-green transition flex items-center gap-1 mb-4">
              ← Back to Store
            </Link>
            <h1 className="font-serif text-5xl font-bold text-brand-charcoal">Checkout</h1>
            <p className="font-sans text-brand-charcoal/60 mt-2">{cartCount} item{cartCount !== 1 ? "s" : ""} in your order</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

            {/* Left — Customer form */}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Contact info */}
              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft p-8">
                <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">Your Information</h2>
                <div className="grid gap-5">
                  <div>
                    <label className="font-sans text-sm font-semibold text-brand-charcoal block mb-1.5">
                      Full Name <span className="text-brand-green">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`w-full rounded-xl border px-4 py-3 font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-green transition ${errors.name ? "border-red-400" : "border-brand-oat"}`}
                    />
                    {errors.name && <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-sm font-semibold text-brand-charcoal block mb-1.5">
                      Email <span className="text-brand-green">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full rounded-xl border px-4 py-3 font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-green transition ${errors.email ? "border-red-400" : "border-brand-oat"}`}
                    />
                    {errors.email && <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-sm font-semibold text-brand-charcoal block mb-1.5">
                      Phone <span className="text-brand-green">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="231-000-0000"
                      className={`w-full rounded-xl border px-4 py-3 font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-green transition ${errors.phone ? "border-red-400" : "border-brand-oat"}`}
                    />
                    {errors.phone && <p className="font-sans text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Pickup option */}
              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft p-8">
                <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">Pickup Method</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className={`flex items-start gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all ${form.pickup === "pickup" ? "border-brand-green bg-brand-green/5" : "border-brand-oat hover:border-brand-green/40"}`}>
                    <input type="radio" name="pickup" value="pickup" checked={form.pickup === "pickup"} onChange={handleChange} className="mt-1 accent-brand-green" />
                    <div>
                      <p className="font-serif text-base font-bold text-brand-charcoal">In-Store Pickup</p>
                      <p className="font-sans text-sm text-brand-charcoal/60 mt-1">Pick up at 4853 Webb Rd, Wolverine, MI during business hours.</p>
                    </div>
                  </label>
                  <label className={`flex items-start gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all ${form.pickup === "call" ? "border-brand-green bg-brand-green/5" : "border-brand-oat hover:border-brand-green/40"}`}>
                    <input type="radio" name="pickup" value="call" checked={form.pickup === "call"} onChange={handleChange} className="mt-1 accent-brand-green" />
                    <div>
                      <p className="font-serif text-base font-bold text-brand-charcoal">Call to Arrange</p>
                      <p className="font-sans text-sm text-brand-charcoal/60 mt-1">We'll call you to arrange a convenient pickup time.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft p-8">
                <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">Special Instructions</h2>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any notes about your order, gift wrapping requests, allergies, etc."
                  className="w-full rounded-xl border border-brand-oat px-4 py-3 font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-green transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-green py-5 font-sans text-base font-semibold text-brand-cream shadow-soft hover:bg-[#1e4a37] hover:-translate-y-0.5 transition-all duration-200"
              >
                Place Order →
              </button>
            </form>

            {/* Right — Order summary */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft overflow-hidden">
                <div className="px-6 py-5 border-b border-brand-oat">
                  <h2 className="font-serif text-xl font-bold text-brand-charcoal">Order Summary</h2>
                </div>

                <div className="divide-y divide-brand-oat">
                  {items.map((item) => (
                    <div key={item.id} className="px-6 py-4 flex gap-4 items-start">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-brand-oat"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm font-bold text-brand-charcoal leading-tight mb-1">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-brand-sage mb-2">{item.category}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-brand-oat flex items-center justify-center font-sans text-sm text-brand-charcoal hover:bg-brand-oat transition"
                          >
                            −
                          </button>
                          <span className="font-sans text-sm font-semibold text-brand-charcoal w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-brand-oat flex items-center justify-center font-sans text-sm text-brand-charcoal hover:bg-brand-oat transition"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-1 font-sans text-xs text-red-400 hover:text-red-600 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="font-serif text-sm font-bold text-brand-green whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-brand-oat bg-[#f5ede3] space-y-3">
                  <div className="flex justify-between font-sans text-sm text-brand-charcoal/70">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm text-brand-charcoal/70">
                    <span>Pickup</span>
                    <span className="text-brand-green font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between font-serif text-lg font-bold text-brand-charcoal border-t border-brand-oat pt-3">
                    <span>Total</span>
                    <span className="text-brand-green">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft p-5 flex items-center gap-4">
                <span className="text-3xl">🌾</span>
                <div>
                  <p className="font-serif text-sm font-bold text-brand-charcoal">Local Farm Products</p>
                  <p className="font-sans text-xs text-brand-charcoal/60 mt-0.5">Sourced from Serendipity Farms and local Michigan partners.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-oat shadow-soft p-5 flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-serif text-sm font-bold text-brand-charcoal">Questions?</p>
                  <a href={BUSINESS_INFO.phoneLink} className="font-sans text-xs text-brand-green hover:text-[#1e4a37] transition">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
