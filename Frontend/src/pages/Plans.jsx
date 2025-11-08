// src/pages/Plans.jsx
import React, { useContext } from "react";
import { ProductContext } from "../ContextProvider";
import { Link } from "react-router-dom";

// 🧩 Other Components
import Products from "../Components/PlansComponents/Products";
import Footer from "../Components/CommonComponents/Footer";
import InsureTechPlans from "../Components/PlansComponents/PlanInfo";
import InsuranceBenefits from "../Components/PlansComponents/Swiper";
import PlansSection from "../Components/PlansComponents/Swiper2";

const Plans = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <>
      {/* 🌟 Hero & Info Sections */}
      <PlansSection />
      <InsuranceBenefits />
      <InsureTechPlans />

      {/* 🏦 Product Display */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Available Insurance Plans</h2>

        {products.length === 0 ? (
          <p className="text-center text-muted">No products available.</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id || product._id}>
                <div className="card shadow-sm h-100 rounded-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold text-primary">{product.title}</h5>
                    <p className="text-muted small mb-2">{product.description}</p>
                    <h6 className="text-success mb-3">Premium: ₹ {product.price}</h6>
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                      <Link
                        to={`/product/${product.id || product._id}`}
                        className="btn btn-outline-primary px-3 py-2"
                      >
                        View Details
                      </Link>
                      <button
                        className="btn btn-success px-3 py-2"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🌍 Footer */}
      <Footer />
    </>
  );
};

export default Plans;
