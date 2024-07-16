import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState(null);

  const handleCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [count]);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(({ slip }) => {
        setAdvice(slip);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  useEffect(() => {
    console.log("log:", advice);
    if (advice) {
      setLocalStorage();
      logLocalStorage();
    }
  }, [advice]);

  const setLocalStorage = () => {
    localStorage.setItem("advice", JSON.stringify(advice));
  };

  const logLocalStorage = () => {
    const advice = localStorage.getItem("advice");
    console.log("log in storage:", JSON.parse(advice));
  };

  return (
    <>
      <h1>Lista utenti: {count}</h1>
      {user && <p>Utente: {user.name}</p>}
      <button onClick={handleCount}>Add</button>

      <hr />
      {advice && <p>Advice: {advice.advice}</p>}
      <button onClick={getAdvice}>Get Advice</button>
      <button onClick={setLocalStorage}>Set local storage</button>
      <button onClick={logLocalStorage}>log local storage</button>
    </>
  );
}

export default App;
