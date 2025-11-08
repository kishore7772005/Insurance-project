import React, { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaCartPlus, FaHeart } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../ContextProvider";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL || "https://insurance-backend-jiuc.onrender.com"}/api/products`
        );
        setProducts(res.data || []);
      } catch (err) {
        console.error("❌ Error fetching products:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600 text-lg">
        Loading products...
      </div>
    );
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("✅ Added to cart successfully!");
    navigate("/cart");
  };

  return (
    <div className="px-6 py-10 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <h2
        className="text-4xl font-extrabold text-center mb-10 tracking-tight"
        style={{ color: "#1e3a8a" }}
        data-aos="fade-up"
      >
        Available Health Insurance Plans
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {products.map((product) => (
            <div
              key={product._id}
              data-aos="zoom-in"
              className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={
                    product.image ||
                    product.img ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={product.title || "Insurance Plan"}
                  className="w-full h-48 object-cover bg-gray-50"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#0f172a" }}
                >
                  {product.title || "Untitled Plan"}
                </h3>

                <p
                  className="text-sm mb-3 line-clamp-2"
                  style={{ color: "#475569" }}
                >
                  {product.description || "No description provided."}
                </p>

                <p
                  className="text-lg font-bold mb-4"
                  style={{ color: "#16a34a" }}
                >
                  ₹{product.price || "N/A"}
                </p>

                <div className="flex justify-center gap-6">
                  <Link to={`/product/${product._id}`}>
                    <FaEye
                      size={20}
                      className="cursor-pointer transition-transform hover:scale-110"
                      style={{ color: "#2563eb" }}
                      title="View Details"
                    />
                  </Link>

                  <FaCartPlus
                    size={20}
                    onClick={() => handleAddToCart(product)}
                    className="cursor-pointer transition-transform hover:scale-110"
                    style={{ color: "#059669" }}
                    title="Add to Cart"
                  />

                  <FaHeart
                    size={20}
                    className="cursor-pointer transition-transform hover:scale-110"
                    style={{ color: "#dc2626" }}
                    title="Wishlist"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
