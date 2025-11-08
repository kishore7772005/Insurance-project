// src/Components/PlansComponents/Cart.jsx
import React, { useContext } from "react";
import { ProductContext } from "../../ContextProvider";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(ProductContext);
  const themeColor = "rgb(57, 115, 210)";

  return (
    <div className="container py-5" style={{ color: themeColor }}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: themeColor }}>
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted" style={{ color: themeColor }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-4 mb-4" key={item._id || item.id}>
                <div
                  className="card shadow-sm h-100 rounded-4 overflow-hidden"
                  style={{
                    borderColor: themeColor,
                    borderWidth: "1.5px",
                    borderStyle: "solid",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5
                      className="fw-bold"
                      style={{ color: themeColor, fontWeight: "700" }}
                    >
                      {item.title}
                    </h5>
                    <h6
                      className="mb-3"
                      style={{ color: "rgb(45, 95, 175)", fontWeight: "600" }}
                    >
                      ₹ {item.price}
                    </h6>
                    <button
                      onClick={() => removeFromCart(item._id || item.id)}
                      className="btn px-3 py-2 fw-semibold"
                      style={{
                        backgroundColor: "transparent",
                        border: `2px solid ${themeColor}`,
                        color: themeColor,
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = themeColor;
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = themeColor;
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn fw-semibold px-4 py-2"
              onClick={clearCart}
              style={{
                backgroundColor: themeColor,
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                transition: "0.3s",
                boxShadow: "0 4px 12px rgba(57, 115, 210, 0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(45, 95, 175)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = themeColor)
              }
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
