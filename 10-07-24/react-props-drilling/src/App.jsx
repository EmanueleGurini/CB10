import "./App.css";
import Layout from "./components/Layout";
import ListItem from "./components/ListItem";

const list = [
  {
    id: 1,
    title: "Vai alle poste",
  },
  {
    id: 2,
    title: "Meccanico",
  },
];

function App() {
  return (
    <div>
      <Layout>
        <ul>
          {list.map((item) => {
            return (
              <ListItem key={item.id} todo={item}>
                <button onClick={() => console.log(item.title)}>Delete</button>
              </ListItem>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

export default App;
