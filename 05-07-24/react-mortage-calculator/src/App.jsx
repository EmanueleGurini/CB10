import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [input, setInput] = useState({
    mortageAmount: 0,
    mortageTerm: 0,
    interestRate: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ciao sono io");
  };

  const handleChange = (e) => {
    setInput((prevState) => {
      //const name = e.target.name
      //const value = e.target.value

      // Destructuring perché e.target è un oggetto!!!
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className={styles.container}>
      {/* Start SX */}
      <div className={styles.container__sx}>
        <h1>Mortage Calculator</h1>

        {/* Start FORM */}
        <form onSubmit={handleSubmit}>
          <label>Mortage Amount</label>
          <input
            name="mortageAmount"
            type="number"
            inputMode="numeric"
            placeholder="Mortage Amount"
            onChange={handleChange}
          />

          <label>Mortage Term</label>
          <input
            name="mortageTerm"
            type="number"
            inputMode="numeric"
            placeholder="Mortage Term"
            onChange={handleChange}
          />

          <label>Iterest Rate</label>
          <input
            name="interestRate"
            type="number"
            inputMode="numeric"
            placeholder="Interest Rate"
            onChange={handleChange}
          />

          <input type="submit" />
        </form>
        {/* End FORM */}
      </div>
      {/* End SX */}
      {/* Start DX */}
      <div className={styles.container__dx}>
        <h2>Your Result</h2>
        <h3>Mortange Amount:{input.mortageAmount}</h3>
        <h3>Mortange Term:{input.mortageTerm}</h3>
        <h3>Interest Rate:{input.interestRate}</h3>
      </div>

      {/* End DX */}
    </div>
  );
}

export default App;
