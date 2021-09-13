import { useState } from "react";

function Form({ addTodo }) {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={taskInput}
          onChange={handleChange}
          placeholder="Digite sua task"
        />
        <button
          onClick={() => (taskInput && addTodo(taskInput), setTaskInput(""))}
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default Form;
