import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { HighlightsSection } from "../components/sections/HighlightsSection";
import { FeaturedMenuSection } from "../components/sections/FeaturedMenuSection";
import { CTASection } from "../components/sections/CTASection";
import { ReviewsSection } from "../components/sections/ReviewsSection";
import { VisitUsSection } from "../components/sections/VisitUsSection";
import { SEO } from "../components/util/SEO";

export function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal">
      <SEO
        title="Farm-to-Table Restaurant in Wolverine, Michigan"
        description="The Farmer's Table offers fresh, locally-sourced breakfast, lunch, dinner, and desserts in Wolverine, Michigan. Experience farm-to-table dining with genuine hospitality."
        canonical="https://farmerstable.com/"
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <FeaturedMenuSection />
      <ReviewsSection />
      <CTASection />
      <VisitUsSection />
      <Footer />
    </div>
  );
}
