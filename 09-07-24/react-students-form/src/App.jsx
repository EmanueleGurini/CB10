import { useState } from "react";
import styles from "./App.module.css";
import Student from "./components/Student";

const initialState = [
  {
    id: self.crypto.randomUUID(),
    nome: "Nicola",
    cognome: "Marmugi",
    citta: "Viareggio",
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Bruna",
    cognome: "Alamia",
    citta: "Palermo",
  },
];

const initialInput = { nome: "", cognome: "", citta: "" };

function App() {
  const [students, setStudents] = useState(initialState);
  const [input, setInput] = useState(initialInput);
  const [filter, setFilter] = useState("");

  /**
   * Cancella uno studente dalla lista degli studenti e aggiorna lo stato
   * @param {*} e
   */
  const handleDelete = (e) => {
    const tmpStudents = students.filter(
      (student) => student.id !== e.target.id
    );

    setStudents(tmpStudents);
  };

  /**
   * Crea un nuovo studente con i dati che vengono presi dagli input della form
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = self.crypto.randomUUID();
    const nome = input.nome;
    const cognome = input.cognome;
    const citta = input.citta;
    setStudents([
      ...students,
      {
        id,
        nome,
        cognome,
        citta,
      },
    ]);

    setInput(initialInput);
  };

  /**
   * Aggiorna lo stato input ogni volta che viene digitato qualcosa negli input della form
   * @param {*} e
   */
  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  /**
   * Aggiorna lo stato che gestisce il filtering
   * @param {*} e
   */
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          id="nome"
          placeholder="Inserire nome"
          value={input.nome}
          onChange={handleChange}
        />

        <label>Cognome</label>
        <input
          id="cognome"
          placeholder="Inserire cognome"
          value={input.cognome}
          onChange={handleChange}
        />

        <label>Città</label>
        <input
          id="citta"
          placeholder="Inserire città"
          value={input.citta}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      <input onChange={handleFilter} />

      {students.map((student) => {
        return <button key={student.id}>{student.citta}</button>;
      })}

      <ul>
        {students
          .filter((student) => student.citta.includes(filter))
          .map((student) => {
            return (
              <Student
                key={student.id}
                student={student}
                onClick={handleDelete}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default App;
