import { useState } from "react";

function Form({ addTodo }) {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
    setTaskInput("");
  };

  return (
    <>
      <form onSubmit={handleClickSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleChange}
          placeholder="Digite sua task"
        />
        <button onClick={() => addTodo(taskInput)}>Add Task</button>
      </form>
    </>
  );
}

export default Form;
