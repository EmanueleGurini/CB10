//import styles from "./App.module.css";
import Button from "./components/button/Button";
import IconCart from "./components/icons/IconCart";

function App() {
  return (
    <>
      <h1>hello, world</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000" />
      </Button>
    </>
  );
}

export default App;
