import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const API_URL = "https://insurance-backend-jiuc.onrender.com/api/products";

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log("📦 Products from backend:", res.data);
      const data = Array.isArray(res.data) ? res.data : res.data.products || [];
      setProducts(data);
    } catch (err) {
      console.error("❌ Error fetching products:", err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("❌ Error deleting:", err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary fw-bold">🧾 Product Dashboard</h1>

      {editing ? (
        <EditProduct product={editing} setEditing={setEditing} refresh={fetchProducts} />
      ) : (
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <table className="table table-striped table-hover align-middle text-center">
              <thead className="table-primary">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th style={{ width: "35%" }}>Description</th>
                  <th>Premium</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((p) => (
                    <tr key={p._id}>
                      <td>
                        {p.img || p.image ? (
                          <img
                            src={p.img || p.image}
                            alt={p.title || "Product"}
                            className="rounded shadow-sm"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        ) : (
                          <span className="text-muted fst-italic">No Image</span>
                        )}
                      </td>
                      <td className="fw-semibold">{p.title || "Untitled"}</td>
                      <td
                        className="text-muted text-start"
                        style={{ maxHeight: "100px", overflowY: "auto" }}
                      >
                        {p.desc || p.description || "No description available"}
                      </td>
                      <td className="fw-bold text-success">₹{p.price || "N/A"}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            onClick={() => setEditing(p)}
                            className="btn btn-success btn-sm"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => deleteProduct(p._id)}
                            className="btn btn-danger btn-sm"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-muted py-4 fst-italic">
                      No products found 😕
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
