import React, { useState } from 'react';
import styles from './Todo.module.css';

const Todo = ({ todo, index, toggleDone, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, edited);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`${styles.todo} ${todo.done ? styles.done : styles.notDone}`}>
      <span className={styles.index}>{index + 1}.</span>
      {isEditing ? (
        <input
          type="text"
          value={edited}
          onChange={(e) => setEdited(e.target.value)}
          className={styles.editInput}
        />
      ) : (
        <span className={styles.text}>{todo.text}</span>
      )}

      <div className={styles.buttons}>
        <button onClick={() => toggleDone(todo.id)}>✓</button>
        <button onClick={handleEdit}>✎</button>
        {!todo.done ? null : (
          <button onClick={() => deleteTodo(todo.id)}>🗑</button>
        )}
      </div>
    </li>
  );
};

export default Todo;
