import React, { createContext, useState, useEffect } from "react";
import { products as allProducts } from "./assets/asset"; // static fallback products

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL || "https://insurance-backend-jiuc.onrender.com"}/api/products`
        );
        const data = await res.json();

        // Merge backend + local static products
        const combined = [
          ...allProducts,
          ...data.map((item) => ({
            ...item,
            image:
              item.image ||
              "https://via.placeholder.com/300x200?text=No+Image",
          })),
        ];

        setProducts(combined);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
        setProducts(allProducts); // fallback to static data
      }
    };

    fetchProducts();
  }, []);

  // Cart functions
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item._id !== id));
  const clearCart = () => setCart([]);

  return (
    <ProductContext.Provider
      value={{ products, cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
