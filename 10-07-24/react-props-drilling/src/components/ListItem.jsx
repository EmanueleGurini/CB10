const ListItem = ({ todo, children }) => {
  console.log(children);
  return (
    <div>
      <li key={todo.id}>
        {todo.title}
        {children}
      </li>
    </div>
  );
};

export default ListItem;
