import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({ title: "", price: "", description: "", image: "" });

  // Updated API URL
  const API_URL = "https://insurance-backend-jiuc.onrender.com/api/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("🗑️ Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("✅ Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setUpdatedData({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${editingProduct}`, updatedData);
      alert("✅ Product updated successfully!");
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("❌ Failed to update product");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4 fw-bold">🧾 All Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-muted">No products found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price (₹)</th>
                <th>Description</th>
                <th style={{ width: "150px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td className="text-center">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>{p.title}</td>
                  <td>₹{p.price}</td>
                  <td>{p.description}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(p)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p._id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Form Popup */}
      {editingProduct && (
        <div
          className="modal fade show d-block"
          style={{
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(3px)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <h5 className="text-center fw-bold text-primary mb-3">Edit Product</h5>
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Title"
                  value={updatedData.title}
                  onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Price"
                  value={updatedData.price}
                  onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })}
                  required
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Description"
                  rows="3"
                  value={updatedData.description}
                  onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
                  required
                ></textarea>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Image URL"
                  value={updatedData.image}
                  onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.value })}
                />

                {updatedData.image && (
                  <div className="text-center mb-3">
                    <img
                      src={updatedData.image}
                      alt="Preview"
                      style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                )}

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary" onClick={() => setEditingProduct(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
