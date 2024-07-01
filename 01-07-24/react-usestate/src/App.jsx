import "./App.css";
import Counter from "./components/Counter";

// elemento.addEventLinster('click', function handleClick() {}
// elemento.addEventLinster('click', function () {}

/**
 * function handleClick() {}
 * elemento.addEventLinster('click', handleClick())
 *
 */

function App() {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      <h1>Hello, CB10!</h1>
      <button onClick={handleClick}>Click me!</button>
      <hr />
      <Counter />
    </>
  );
}

export default App;
