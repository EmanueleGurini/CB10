import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [userId, setUserId] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUser = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await data.json();

      setUser(user);
    } catch (error) {
      console.log(error);

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, [userId, count]);

  /*   const handleEffect = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholde.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((e) => {
        console.log("error", e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }; */

  const handleEffect = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await data.json();

      setUsers(users);
    } catch (error) {
      console.log(error);

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // codice da eseguire in un determinato momento

    handleEffect();

    console.log("pippo");
  }, []);

  if (isLoading) return <p>Loading data...</p>;

  if (isError) return <p>Aho, cè un errore!</p>;
  return (
    <>
      <h1>Count: {count}</h1>
      <input
        value={userId}
        type="number"
        placeholder="Insert user id..."
        onChange={handleChange}
      />
      {user && <h2>{user.name}</h2>}

      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}

      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default App;
