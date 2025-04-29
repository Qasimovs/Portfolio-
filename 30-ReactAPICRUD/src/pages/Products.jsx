import { useEffect, useState } from "react";
import Product from ".src/components/Product";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch {
      toast.error("Productlar gətirilə bilmədi!");
    }
    setLoading(false);
  };

  const createProduct = async () => {
    if (!newTitle || !newPrice) return;
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ title: newTitle, price: newPrice }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setProducts([...products, data]);
      toast.success("Product əlavə olundu!");
      setNewTitle("");
      setNewPrice("");
    } catch {
      toast.error("Əlavə edilə bilmədi!");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      setProducts(products.filter(p => p.id !== id));
      toast.success("Product silindi!");
    } catch {
      toast.error("Silmək alınmadı!");
    }
  };

  const startEdit = (product) => {
    setEditId(product.id);
    setEditTitle(product.title);
    setEditPrice(product.price);
  };

  const updateProduct = async () => {
    if (!editTitle || !editPrice) return;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${editId}`, {
        method: "PUT",
        body: JSON.stringify({ title: editTitle, price: editPrice }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setProducts(products.map(p => p.id === editId ? data : p));
      toast.success("Product yeniləndi!");
      setEditId(null);
    } catch {
      toast.error("Yenilənmə alınmadı!");
    }
  };

  const resetProducts = () => {
    setProducts([]);
    toast.info("Bütün productlar sıfırlandı!");
  };

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button onClick={createProduct}>Əlavə et</button>
      </div>

      <button onClick={resetProducts} style={{ background: "red", color: "white", marginBottom: "20px" }}>
        Reset
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <Product
            key={product.id}
            product={product}
            onDelete={deleteProduct}
            onEdit={startEdit}
          />
        ))
      )}

      {/* Modal */}
      {editId && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{ background: "white", padding: 20 }}>
            <h2>Product Redaktəsi</h2>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              type="number"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
            <div style={{ marginTop: 10 }}>
              <button onClick={updateProduct}>Yadda saxla</button>
              <button onClick={() => setEditId(null)} style={{ marginLeft: 10 }}>
                Bağla
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Products;
