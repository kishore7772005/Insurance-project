import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../ContextProvider";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = products.find((p) => p._id === id || p.id?.toString() === id);
    if (found) {
      setProduct(found);
    } else {
      // fallback fetch if not in context
      axios
        .get(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch(() => setProduct(null));
    }
  }, [id, products]);

  if (!product)
    return (
      <div className="text-center py-5 text-danger fw-bold">
        Product not found!
      </div>
    );

  const handleAddToCart = () => {
    addToCart(product);
    alert("✅ Added to cart successfully!");
    navigate("/cart");
  };

  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="row shadow-sm rounded-4 bg-white overflow-hidden">
        <div className="col-md-6 p-4" style={{ backgroundColor: "#f1f3f5" }}>
          <img
            src={
              product.image ||
              product.img ||
              "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={product.title || "Product Image"}
            className="img-fluid rounded-4"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
          <h2 className="text-primary fw-bold mb-3">{product.title}</h2>
          <p className="text-muted mb-3">{product.description}</p>
          <h4 className="text-success mb-3">Premium: ₹ {product.price}</h4>
          <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <Link to="/plans" className="btn btn-secondary">
              Back to Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
