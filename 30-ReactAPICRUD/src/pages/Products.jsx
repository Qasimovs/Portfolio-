import React, { useState } from "react";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";
import ProductModal from "../components/ProductModal";
import { toast } from "react-toastify";

const Products = ({ products, setProducts, loading }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleCreate = (newProduct) => {
    setProducts([...products, newProduct]);
    toast.success("Product added!");
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    toast.success("Product updated!");
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success("Product deleted!");
  };

  const handleReset = () => {
    setProducts([]);
    toast.info("All products cleared!");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <ProductForm onCreate={handleCreate} />
      <button onClick={handleReset}>Reset All</button>

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onEdit={() => setEditingProduct(product)}
        />
      ))}

      {editingProduct && (
        <ProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default Products;
