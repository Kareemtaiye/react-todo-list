import TodoItem from "./TodoItem";

function TodoList({
  status,
  todoList,
  onHandleCompleteTodo,
  onHandleRemoveComplete,
  onHandleDeleteTodo,
}) {
  const incompleteList = todoList.filter(
    (todo) => todo?.status === "incomplete"
  );

  const completeList = todoList.filter((todo) => todo?.status === "complete");
  console.log(incompleteList, completeList);

  return (
    <ul className={`todo-container ${status}`}>
      <div
        style={{ color: status === "complete" ? "#fff" : "#000" }}
        className="status-title"
      >
        <p>
          {status.replace(status[0], status[0].toUpperCase())}{" "}
          {status === "complete" ? "✅" : "🔕"}
        </p>
        {status === "complete" && <p>{completeList.length} Completed</p>}
        {status === "incomplete" && (
          <p>{incompleteList.length} Not Completed</p>
        )}
      </div>
      <div className="item-holder">
        {status === "complete" &&
          completeList.map((todo) => (
            <TodoItem
              onHandleCompleteTodo={onHandleCompleteTodo}
              onHandleRemoveComplete={onHandleRemoveComplete}
              onHandleDeleteTodo={onHandleDeleteTodo}
              key={todo.date}
              todo={todo}
              status={status}
            />
          ))}

        {status === "incomplete" &&
          incompleteList.map((todo) => (
            <TodoItem
              onHandleCompleteTodo={onHandleCompleteTodo}
              onHandleRemoveComplete={onHandleRemoveComplete}
              onHandleDeleteTodo={onHandleDeleteTodo}
              key={todo.date}
              todo={todo}
              status={status}
            />
          ))}
      </div>
    </ul>
  );
}

export default TodoList;
