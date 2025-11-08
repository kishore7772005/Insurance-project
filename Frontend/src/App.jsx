// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Claim from "./pages/Claim";

import Navbar from "./Components/CommonComponents/Navbar";
import Products from "./Components/PlansComponents/Products";
import ProductDetails from "./Components/PlansComponents/ProductDetails";
import Cart from "./Components/PlansComponents/Cart"; // ✅ Ensure file exists

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/claim" element={<Claim />} />

        {/* Product Pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
