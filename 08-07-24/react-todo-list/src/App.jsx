import styles from "./App.module.css";
import { useState } from "react";

const initialTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Fare la spesa",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Rinnovare assicurazione",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.length) return;

    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
    console.log("dopo:", todos);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (e) => {
    const newList = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newList);
  };

  return (
    <div className={styles.container}>
      <input value={input} placeholder="ToDo" onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
      <div className={styles.container__list}>
        <h2>List di Todo</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}{" "}
                <button id={todo.id} onClick={handleDelete}>
                  Delete.
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
