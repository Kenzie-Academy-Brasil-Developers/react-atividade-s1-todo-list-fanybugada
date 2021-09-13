import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [toDo, setToDo] = useState([]);

  const addTodo = (newTodo) => {
    setToDo([...toDo, newTodo]);
  };

  const handleTodo = (item) => {
    setToDo(toDo.filter((task) => task !== item));
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList toDo={toDo} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
