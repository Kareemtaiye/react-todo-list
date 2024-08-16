import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const todo = {
    todoText,
    status: "incomplete",
    date: new Date(),
    id: Date.now(),
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!todoText) return;
    onAddTodo(todo);

    setTodoText("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Get Sushi"
        autoFocus
        type="text"
      />
      <button className="add-todo">Add</button>
    </form>
  );
}

export default AddTodo;
