import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { AboutPage } from "./pages/AboutPage";
import { StorefrontPage } from "./pages/Storefront";
import { SerendipityFarmsPage } from "./pages/SerendipityFarmsPage";
import { CheckoutPage } from "./pages/CheckoutPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/storefront" element={<StorefrontPage />} />
          <Route path="/serendipity-farms" element={<SerendipityFarmsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
  