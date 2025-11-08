import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../../ContextProvider";
import { FaUserCircle, FaShoppingCart, FaTrash } from "react-icons/fa";
import Logo from "../../assets/CompanyImages/Logo.png";

const Navbar = () => {
  const { cart, removeFromCart, clearCart, addedProduct, setAddedProduct } = useContext(ProductContext);
  const [showCart, setShowCart] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "Claim", path: "/claim" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ background: "#3973d2" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <img src={Logo} alt="Logo" style={{ width: "40px", marginRight: "10px" }} />
          InsureTech
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-nav mx-auto d-flex flex-row">
          {navLinks.map((link) => (
            <li className="nav-item mx-2" key={link.name}>
              <NavLink
                className="nav-link text-white"
                to={link.path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart + User Section */}
        <div className="d-flex align-items-center position-relative">
          {/* Cart Icon */}
          <div
            className="me-3 position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => setShowCart(!showCart)}
          >
            <FaShoppingCart className="text-white fs-4" />
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </div>

          {/* Cart Dropdown */}
          {showCart && (
            <div
              style={{
                width: "300px",
                right: 0,
                position: "absolute",
                top: "40px",
                zIndex: 999,
              }}
              className="bg-white shadow rounded p-3"
            >
              <h6>Cart Items</h6>
              {cart.length === 0 ? (
                <p className="text-muted">No items in cart</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                      <span>{item.title}</span>
                      <div className="d-flex align-items-center gap-2">
                        <span>₹ {item.price}</span>
                        <FaTrash style={{ cursor: "pointer" }} onClick={() => removeFromCart(item.id)} />
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-sm btn-danger w-100 mt-2" onClick={clearCart}>
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          )}

          {/* User Icon */}
          <Link to="/login" className="text-white fs-4 ms-3">
            <FaUserCircle />
          </Link>
        </div>

        {/* Product Added Modal */}
        {addedProduct && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Added to Cart</h5>
                  <button type="button" className="btn-close" onClick={() => setAddedProduct(null)}></button>
                </div>
                <div className="modal-body">
                  <p>
                    <strong>{addedProduct.title}</strong> has been added to your cart.
                  </p>
                  <p>Premium: ₹ {addedProduct.price}</p>
                </div>
                <div className="modal-footer">
                  <Link to="/cart" className="btn btn-primary" onClick={() => setAddedProduct(null)}>
                    Go to Cart
                  </Link>
                  <button type="button" className="btn btn-secondary" onClick={() => setAddedProduct(null)}>
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
