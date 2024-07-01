import { useState } from "react";

function Counter() {
  //let counter = 0;

  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    return event.target.id === "add"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  return (
    <div>
      <button disabled={counter === 0} id="sub" onClick={(e) => handleClick(e)}>
        -
      </button>
      Counter: {counter}
      <button disabled={counter >= 10} id="add" onClick={(e) => handleClick(e)}>
        +
      </button>
    </div>
  );
}

export default Counter;
