import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditProduct({ product, setEditing, refresh }) {
  const [form, setForm] = useState(product);

  // Handle text field change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle image upload (convert to base64)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://insurance-backend-jiuc.onrender.com/api/products/${form._id}`, form);
    alert("✅ Product updated successfully!");
    setEditing(null);
    refresh();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-primary text-white text-center py-3 rounded-top">
          <h4 className="mb-0">✏️ Edit Product</h4>
        </div>

        <div className="card-body bg-light p-4">
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label fw-semibold">Product Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter product title"
                className="form-control shadow-sm"
                required
              />
            </div>

            <div>
              <label className="form-label fw-semibold">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="3"
                className="form-control shadow-sm"
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="form-control shadow-sm"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="form-control shadow-sm"
                />
              </div>
            </div>

            {form.image && (
              <div className="text-center mt-3">
                <img
                  src={form.image}
                  alt="Product Preview"
                  className="rounded shadow-sm"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "2px solid #dee2e6",
                  }}
                />
                <p className="text-muted small mt-2">Preview</p>
              </div>
            )}

            <div className="d-flex justify-content-between mt-4">
              <button type="submit" className="btn btn-success px-4">
                ✅ Update
              </button>
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="btn btn-secondary px-4"
              >
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
