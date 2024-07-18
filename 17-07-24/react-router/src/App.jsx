import { useEffect, useState } from "react";
import ItemUser from "./components/ItemUser";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  /*   useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]); */

  return (
    <>
      <p className="bg-green-300">Lista utenti</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <ItemUser user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
