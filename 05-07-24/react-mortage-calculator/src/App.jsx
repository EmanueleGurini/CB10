import { useState } from "react";

import classNames from "classnames";
import styles from "./App.module.css";

/**
 * Calcola l'interesse sull'amount
 * @param {string} interestRate
 * @param {string} mortageAmout
 * @returns number
 */
const getInterest = (interestRate, mortageAmout) => {
  return parseFloat((mortageAmout * interestRate) / 100);
};

/**
 * Calcola la somma tra interesse e ammontare complessivo
 * @param {string} mortageAmount
 * @param {string} interest
 * @returns number
 */
const getTotal = (mortageAmount, interest) => {
  return parseFloat(mortageAmount) + parseFloat(interest);
};

/**
 * Restituisce il numero delle rate da pagare
 * @param {string} total
 * @param {string} mortageTerm
 * @returns number
 */
const getRates = (total, mortageTerm) => {
  return parseFloat(total / mortageTerm);
};

function App() {
  const inputDefault = {
    mortageAmount: "",
    mortageTerm: "",
    interestRate: "",
  };

  const [input, setInput] = useState(inputDefault);
  const [totaleRata, setTotaleRata] = useState(null);

  const clear = () => {
    setInput(inputDefault);
    setTotaleRata(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interest = getInterest(input.interestRate, input.mortageAmount);
    const total = getTotal(input.mortageAmount, interest);
    const rateTotali = getRates(total, input.mortageTerm);
    setTotaleRata(rateTotali);
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

  //const classPippo = input.interestRate ? styles.pippo : null;
  return (
    <div className={classNames(`${styles.container}`)}>
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
            value={input.mortageAmount}
            onChange={handleChange}
          />

          <label>Mortage Term</label>
          <input
            name="mortageTerm"
            type="number"
            inputMode="numeric"
            placeholder="Mortage Term"
            value={input.mortageTerm}
            onChange={handleChange}
          />

          <label>Iterest Rate</label>
          <input
            name="interestRate"
            type="number"
            inputMode="numeric"
            placeholder="Interest Rate"
            value={input.interestRate}
            onChange={handleChange}
          />

          <input type="submit" />
          <button onClick={clear}>ClearAll</button>
        </form>

        {/* End FORM */}
      </div>
      {/* End SX */}
      {/* Start DX */}
      <div className={styles.container__dx}>
        <h2>Your Result</h2>
        {totaleRata ? <p>Totale rata: {totaleRata}</p> : <p>pippo</p>}
      </div>

      {/* End DX */}
    </div>
  );
}

export default App;
