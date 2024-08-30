function UserTestPage() {
  fetch("http://localhost:3000/api/user/66d19ea494a2c9653c286c71", {
    method: "delete",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  return <div>page</div>;
}

export default UserTestPage;
