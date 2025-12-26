import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Claim from "./pages/Claim";

import Navbar from "./Components/CommonComponents/Navbar";
import Products from "./Components/PlansComponents/Products";
import ProductDetails from "./Components/PlansComponents/ProductDetails";
import Cart from "./Components/PlansComponents/Cart";

// ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/claim" element={<Claim />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
