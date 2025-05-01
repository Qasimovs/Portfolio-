import React, { useState, useEffect } from "react";

const TodoModal = ({ show, todo, onClose }) => {
  const [input, setInput] = useState(todo.text);

  useEffect(() => {
    setInput(todo.text);
  }, [todo]);

  const handleSave = () => {
    if (input.trim()) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.3s ease",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>Edit Todo</h3>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxSizing: "border-box",
            outline: "none",
            transition: "border 0.3s",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Edit your todo"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
              width: "48%",
            }}
            onClick={handleSave}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
          >
            Save
          </button>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
              width: "48%",
            }}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#e53935"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#f44336"}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
