const Product = ({ product, onDelete, onEdit }) => {
    return (
      <div style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px"
      }}>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => onEdit(product)}>Redaktə</button>
        <button onClick={() => onDelete(product.id)} style={{ marginLeft: "10px", color: "red" }}>
          Sil
        </button>
      </div>
    );
  };
  
  export default Product;
  