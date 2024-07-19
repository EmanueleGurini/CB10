import { useContext } from "react";
import { SetProductContext, ProductContext } from "./providers/ProductContext";

function App() {
  const { setProducts } = useContext(SetProductContext);
  const { products } = useContext(ProductContext);

  const handleAdd = () => {
    setProducts(products + 1);
  };

  return (
    <div>
      <p>Product count: {products}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
