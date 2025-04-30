
  let todos = [];

  function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = todo.completed ? "completed" : "not-completed";

      const text = document.createElement("span");
      text.className = "todo-text";
      text.textContent = `${index + 1}. ${todo.text}`;

      const actions = document.createElement("div");
      actions.className = "todo-actions";

      const completeBtn = document.createElement("button");
      completeBtn.className = "complete-btn";
      completeBtn.textContent = "✓";
      completeBtn.title = "Complete";
      completeBtn.onclick = () => toggleComplete(index);

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit";
      editBtn.onclick = () => editTodo(index);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTodo(index);

      
      if (!todo.completed) {
        deleteBtn.disabled = true;
        deleteBtn.style.opacity = "0.5";
        deleteBtn.style.cursor = "not-allowed";
      }

      actions.append(completeBtn, editBtn, deleteBtn);
      li.append(text, actions);
      list.appendChild(li);
    });
  }

  function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text === "") {
      alert("No need to add empty todo.");
      return;
    }

    todos.push({ text, completed: false });
    input.value = "";
    renderTodos();
  }

  function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  function editTodo(index) {
    if (todos[index].completed) {
      alert("Completed todo cannot be edited.");
      return;
    }

    const newText = prompt("Enter a new todo:", todos[index].text);
    if (newText && newText.trim() !== "") {
      todos[index].text = newText.trim();
      renderTodos();
    }
  }

  function deleteTodo(index) {
    if (!todos[index].completed) {
      alert("You can only delete completed todo.");
      return;
    }

    todos.splice(index, 1);
    renderTodos();
  }

  function clearAll() {
    if (confirm("Are you sure you want to delete all todos?")) {
      todos = [];
      renderTodos();
    }
  }