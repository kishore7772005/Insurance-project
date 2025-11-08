import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  // Updated API URL to your deployed backend
  const API_URL = "https://insurance-backend-jiuc.onrender.com/api/products";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { title, description, price, image };

    try {
      const res = await axios.post(API_URL, productData);
      alert("✅ Product added successfully!");
      console.log(res.data);
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
      setPreview("");
    } catch (err) {
      console.error("❌ Error adding product:", err);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px", borderRadius: "15px" }}>
        <h3 className="text-center text-primary mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Price (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Image</label>
            <input
              type="file"
              className="form-control mb-2"
              accept="image/*"
              onChange={handleImageChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="or paste image URL"
              value={image.startsWith("data") ? "" : image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {image && (
            <div className="text-center mb-4">
              <img
                src={preview || image}
                alt="Preview"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "200px" }}
              />
            </div>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary fw-semibold py-2">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
