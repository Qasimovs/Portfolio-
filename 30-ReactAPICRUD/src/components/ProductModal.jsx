import React, { useState } from "react";

const ProductModal = ({ product, onClose, onSave }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    const updatedProduct = { ...product, title, price: parseFloat(price) };
    onSave(updatedProduct);
    onClose();
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "white", padding: 20 }}>
        <h3>Edit Product</h3>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <input value={price} type="number" onChange={e => setPrice(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProductModal;
