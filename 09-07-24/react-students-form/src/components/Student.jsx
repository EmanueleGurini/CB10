function Student({ student, onClick }) {
  const { id, nome, cognome } = student;

  return (
    <li>
      {nome} {cognome}
      <button id={id} onClick={onClick}>
        delete
      </button>
    </li>
  );
}

export default Student;
