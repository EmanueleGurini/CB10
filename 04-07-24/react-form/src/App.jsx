//import styles from "./app.module.css";
import { useState } from "react";

function App() {
  // ========================================

  const disney = {
    personaggio1: "pippo",
    personaggio2: "pluto",
    personaggio3: "minnie",
    personaggio4: "paperina",
  };

  //const disneyUpdated = { ...disney, personaggio1: "maurizio" };

  const parole = ["personaggio2", "personaggio4"];

  parole.map((key) => {
    disney[key] = "maurizio";
    //console.log(key + " : " + disney[key]);
  });

  //console.log("disney:", disney.personaggio_1);

  // ========================================
  const [input, setInput] = useState({
    pippo: "",
    minnie: "",
    paperino: "",
    qui: "",
    quo: "",
    qua: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(input);
  };

  const obj = { chiave1: "pippo", chiave2: "pluto" };

  const { chiave1, chiave2 } = obj;
  console.log(chiave1, chiave2);

  return (
    <>
      <form style={{ display: "flex", "flex-direction": "column" }}>
        <label>Pippo</label>
        <input name="pippo" placeholder="Pippo" onChange={handleChange} />
        <label>Minnie</label>
        <input name="minnie" placeholder="Minnie" onChange={handleChange} />
        <label>Paperino</label>
        <input name="paperino" placeholder="Paperino" onChange={handleChange} />

        <label>Qui</label>
        <input name="qui" placeholder="Qui" onChange={handleChange} />
      </form>
    </>
  );
}

export default App;
