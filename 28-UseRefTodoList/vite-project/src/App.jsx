import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
// import Todo from './src/components/Todo';

let idCounter = 1;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) {
      toast.error('Boş todo əlavə etmək olmaz!');
      return;
    }
    setTodos([...todos, { id: idCounter++, text: input.trim(), done: false }]);
    setInput('');
    toast.success('Yeni todo əlavə edildi');
  };

  const toggleDone = (id) => {
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
    toast.info('Todo statusu dəyişdirildi');
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      toast.error('Boş mətn ilə redaktə etmək olmaz!');
      return;
    }
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, text: newText.trim() } : todo)
    );
    toast.success('Todo redaktə olundu');
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    toast.warn('Todo silindi');
  };

  const clearAll = () => {
    setTodos([]);
    toast.error('Bütün todolar silindi!');
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Yeni todo yazın..."
        />
        <button onClick={addTodo}>Əlavə et</button>
        <button onClick={clearAll} className={styles.clearAll}>Hamısını Sil</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            index={index}
            toggleDone={toggleDone}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
