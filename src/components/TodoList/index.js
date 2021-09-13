function TodoList({ toDo, handleTodo }) {
  return (
    <ul>
      {toDo.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => handleTodo(task)}>Done</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
