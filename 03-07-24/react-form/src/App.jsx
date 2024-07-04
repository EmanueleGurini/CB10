//import styles from "./app.module.css";
import { useState } from "react";

function App() {
  // ========================================

  const obj = {
    chiave1: "valore",
  };

  console.log("prima di pippo:", obj);

  obj.chiave1 = "pippo";

  console.log("dopo pippo:", obj);
  // ========================================
  const [input, setInput] = useState({
    name: "",
    surname: "",
    city: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [key]: value });
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
