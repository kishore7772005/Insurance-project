import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaPlus, FaHome } from "react-icons/fa";

const AdminSidebar = ({ isOpen }) => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    { name: "Add Product", icon: <FaPlus />, path: "/admin/add-product" },
    { name: "Home", icon: <FaHome />, path: "/" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "60px",
        left: 0,
        height: "100%",
        width: isOpen ? "200px" : "70px",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        boxSizing: "border-box",
        transition: "width 0.3s ease",
        overflow: "hidden",
        borderRight: "1px solid #ddd",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: isOpen ? "flex-start" : "center",
            }}
          >
            <Link
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500,
              }}
              title={!isOpen ? item.name : ""}
            >
              <span style={{ fontSize: "18px", marginRight: isOpen ? "10px" : "0" }}>
                {item.icon}
              </span>
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
