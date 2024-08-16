function TodoItem({
  status,
  todo,
  onHandleCompleteTodo,
  onHandleRemoveComplete,
  onHandleDeleteTodo,
}) {
  return (
    <li className="item">
      <span
        style={{
          textDecoration: status === "complete" ? "line-through" : "",
        }}
      >
        {todo.todoText}
      </span>
      <div className="actions">
        {status === "incomplete" && (
          <button onClick={() => onHandleCompleteTodo(todo.id)}>Done</button>
        )}
        {status === "incomplete" && <button className="edit-edit">Edit</button>}
        {status === "complete" && (
          <button
            className="del-action"
            onClick={() => onHandleRemoveComplete(todo.id)}
          >
            Remove
          </button>
        )}
        {status === "incomplete" && (
          <button
            className="del-edit"
            onClick={() => onHandleDeleteTodo(todo.id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
