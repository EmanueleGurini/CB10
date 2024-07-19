import { useEffect, useState, useContext } from "react";
import { SetProductContext } from "./providers/ProductContext";

function App() {
  const [productList, setProductList] = useState([]);
  const { setProducts } = useContext(SetProductContext);

  const handleAdd = (product) => {
    setProducts((prevState) => [...prevState, product]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => setProductList(res));
  }, []);

  return (
    <div>
      <ul>
        {productList.map((product) => {
          return (
            <li className="flex gap-2" key={product.id}>
              {product.title}

              <button
                className="bg-green-400 p-2"
                onClick={() => handleAdd(product)}
              >
                Add
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
