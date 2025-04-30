const Product = ({ product, onDelete, onEdit }) => {
  console.log("Product:", product); // Debug üçün
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px"
    }}>
      <h3>{product?.title || "Başlıq yoxdur"}</h3>
      <p>Price: ${product?.price || "0"}</p>
      <button onClick={() => onEdit(product)}>Redaktə</button>
      <button onClick={() => onDelete(product.id)} style={{ marginLeft: "10px", color: "red" }}>
        Sil
      </button>
    </div>
  );
};
