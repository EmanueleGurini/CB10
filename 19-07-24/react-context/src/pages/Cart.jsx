import { useContext } from "react";
import { ProductContext, SetProductContext } from "../providers/ProductContext";
function Cart() {
  const { products } = useContext(ProductContext);
  const { setProducts } = useContext(SetProductContext);

  const handleDelete = (id) => {
    setProducts((prevState) => prevState.filter((product) => product.id != id));
  };

  return (
    <div>
      Cart
      <ul>
        {products.map((product, index) => {
          return (
            <li className="flex gap-2" key={`${product.id}-${index}`}>
              {product.title}

              <button
                className="bg-green-400 p-2"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
