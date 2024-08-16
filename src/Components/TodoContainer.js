import TodoList from "./TodoList";

function TodoContainer({
  todoList,
  onHandleCompleteTodo,
  onHandleRemoveComplete,
  onHandleDeleteTodo,
}) {
  return (
    <div className="container">
      <TodoList
        status="incomplete"
        onHandleCompleteTodo={onHandleCompleteTodo}
        onHandleRemoveComplete={onHandleRemoveComplete}
        onHandleDeleteTodo={onHandleDeleteTodo}
        todoList={todoList}
      />
      <TodoList
        status="complete"
        onHandleCompleteTodo={onHandleCompleteTodo}
        onHandleRemoveComplete={onHandleRemoveComplete}
        onHandleDeleteTodo={onHandleDeleteTodo}
        todoList={todoList}
      />
    </div>
  );
}

export default TodoContainer;
