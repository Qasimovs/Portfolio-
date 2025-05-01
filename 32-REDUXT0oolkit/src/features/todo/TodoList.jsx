import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAllTodos } from "./todoSlice";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Todo List</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          style={{ padding: "10px", width: "70%", marginRight: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
          placeholder="Enter a new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
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
          }}
          onClick={handleAdd}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          Add
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
            marginLeft: "10px",
          }}
          onClick={() => dispatch(deleteAllTodos())}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#e53935"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#f44336"}
        >
          Delete All
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "12px",
              background: "#fff",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
            }}
          >
            <span>{todo.text}</span>
            <div>
              <button
                style={{
                  marginLeft: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#2196F3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s",
                }}
                onClick={() => setEditingTodo(todo)}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#1976D2"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#2196F3"}
              >
                Edit
              </button>
              <button
                style={{
                  marginLeft: "8px",
                  padding: "8px 12px",
                  backgroundColor: "#e91e63",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s",
                }}
                onClick={() => dispatch(deleteTodo(todo.id))}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#c2185b"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#e91e63"}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <TodoModal
        show={!!editingTodo}
        todo={editingTodo || {}}
        onClose={() => setEditingTodo(null)}
      />
    </div>
  );
};

export default TodoList;
