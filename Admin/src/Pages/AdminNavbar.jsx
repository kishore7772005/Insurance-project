import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-light">🧮 Admin Panel</h3>
      <div>
        <Link to="/admin/dashboard" className="btn btn-outline-light mx-2">Dashboard</Link>
        <Link to="/admin/add-product" className="btn btn-outline-light">Add Product</Link>
      </div>
    </nav>
  );
}
