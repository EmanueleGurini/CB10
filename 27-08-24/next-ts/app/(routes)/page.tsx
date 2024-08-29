import { getUsers } from "@/action/get-users";
import Link from "next/link";

export default async function Home() {
  const users = await getUsers();

  return (
    <main>
      {users.map((user) => {
        return (
          <li key={user.id}>
            Name: {user.name}{" "}
            <Link className="underline" href={`/user/${user.id}`}>
              Vai alla pagina utente
            </Link>
          </li>
        );
      })}
    </main>
  );
}
