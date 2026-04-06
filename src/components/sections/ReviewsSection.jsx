import { GOOGLE_REVIEWS } from "../../data/siteContent";

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < count ? "#FBBC04" : "#e5e7eb"}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export function ReviewsSection() {
  const { rating, totalReviews, googleUrl, reviews } = GOOGLE_REVIEWS;

  return (
    <section className="py-24 px-4 bg-[#f5ede3]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-sage mb-3">
            Guest Reviews
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal mb-5">
            What Our Guests Are Saying
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-brand-oat" />
            <div className="w-2 h-2 rounded-full bg-brand-green" />
            <div className="h-px w-24 bg-brand-oat" />
          </div>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-soft border border-brand-oat">
            <GoogleLogo />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-bold text-brand-charcoal leading-none">{rating}</span>
                <Stars count={Math.round(rating)} />
              </div>
              <span className="font-sans text-xs text-brand-charcoal/50 mt-0.5">Based on {totalReviews}+ Google reviews</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-brand-oat shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-sans font-semibold text-brand-charcoal text-sm">{review.name}</p>
                  <p className="font-sans text-xs text-brand-charcoal/40 mt-0.5">{review.date}</p>
                </div>
                <GoogleLogo />
              </div>
              <Stars count={review.rating} />
              <p className="font-sans text-sm leading-relaxed text-brand-charcoal/75 flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-200"
          >
            <GoogleLogo />
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
