//import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    city: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput((prevState) => ({ prevState, [name]: value }));
  };
  return (
    <>
      <form>
        <label>Nome</label>
        <input name="name" onChange={(e) => handleChange(e)} />

        <label>Cognome</label>
        <input name="surname" onChange={(e) => handleChange(e)} />

        <label>Città</label>
        <input name="city" onChange={(e) => handleChange(e)} />
      </form>
      <h1>{input.name}</h1>
      <h1>{input.surname}</h1>
      <h1>{input.city}</h1>
    </>
  );
}

export default App;
