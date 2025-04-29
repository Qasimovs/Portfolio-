import React, { useState } from "react";

const ProductForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
    };
    onCreate(newProduct);
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
