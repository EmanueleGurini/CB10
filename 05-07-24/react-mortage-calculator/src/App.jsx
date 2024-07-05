import styles from "./App.module.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ciao sono io");
  };

  return (
    <div className={styles.container}>
      {/* Start SX */}
      <div className={styles.container__sx}>
        <h1>Mortage Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label>Mortage Amount</label>
          <input type="text" />

          <label>Mortage Term</label>
          <input type="text" />

          <label>Iterest Rate</label>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
      {/* End SX */}
      {/* Start DX */}
      <div className={styles.container__dx}>
        <h2>Your Result</h2>
        <h3>Risultato -- da sostituire</h3>
      </div>

      {/* End DX */}
    </div>
  );
}

export default App;
