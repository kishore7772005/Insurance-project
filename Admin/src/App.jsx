// Admin/src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import AdminNavbar from "./Pages/AdminNavbar";
import AdminSidebar from "./Pages/AdminSidebar";
import AdminPanel from "./Pages/AdminPanel";
import AddProduct from "./Pages/AddProduct";
import Dashboard from "./Pages/Dashboard";
import AdminProducts from "./Pages/AdminProducts";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <>
      <AdminNavbar />

      <div style={{ display: "flex" }}>
        <AdminSidebar isOpen={true} />

        <div style={{ flex: 1, marginLeft: "200px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin" element={<AdminPanel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="text-center py-5">
                  <h2 className="text-danger">404 - Page Not Found</h2>
                  <p>Sorry, this page doesn’t exist.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
