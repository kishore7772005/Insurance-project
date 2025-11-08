import React from "react";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div style={{ width: "100%", background: "#f8f9fa", padding: "20px" }}>
      <h3 className="fw-bold">Welcome to InsureTech Admin Panel</h3>
      <p>Select an option from the sidebar to get started.</p>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
