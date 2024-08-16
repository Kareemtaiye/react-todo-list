import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo(todo) {
    setTodoList((todolist) => [...todolist, todo]);
  }

  function handleCompleteTodo(id) {
    setTodoList((todoList) =>
      [...todoList].map((todo) =>
        todo.id === id ? { ...todo, status: "complete" } : todo
      )
    );
  }

  function handleRemoveComplete(id) {
    setTodoList((todoList) =>
      [...todoList].map((todo) =>
        todo.id === id ? { ...todo, status: "incomplete" } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodoList((todoList) => [...todoList].filter((todo) => todo.id !== id));
  }

  console.log(todoList);
  return (
    <main className="App">
      <h1>To-Do List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoContainer
        onHandleCompleteTodo={handleCompleteTodo}
        onHandleRemoveComplete={handleRemoveComplete}
        onHandleDeleteTodo={handleDeleteTodo}
        todoList={todoList}
      />
    </main>
  );
}

export default App;
