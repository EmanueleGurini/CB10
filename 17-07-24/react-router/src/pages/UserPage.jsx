import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>is loading.. </p>;

  return (
    <div>
      <p>ciao sono una pagina</p>
      {!isError ? (
        <>
          {" "}
          <p>
            Ciao sono user id: {id} - {user.name}{" "}
          </p>
          <p>{user.username}</p>{" "}
        </>
      ) : (
        <p>è un errore</p>
      )}
    </div>
  );
}

export default UserPage;
