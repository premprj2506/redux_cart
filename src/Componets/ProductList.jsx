import Product from "./Product";
import { addItem } from "../redux/Cart/cartSlice";
import { useDispatch } from "react-redux";

const list = [
  { id: 1, name: "T-Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Jeans", price: 40, quantity: 1 },
  { id: 3, name: "Sneakers", price: 60, quantity: 1 },
  { id: 4, name: "Jacket", price: 80, quantity: 1 },
  { id: 5, name: "Cap", price: 15, quantity: 3 },
  { id: 6, name: "Socks", price: 5, quantity: 5 },
  { id: 7, name: "Hoodie", price: 50, quantity: 2 },
  { id: 8, name: "Shorts", price: 25, quantity: 2 },
  { id: 9, name: "Belt", price: 10, quantity: 1 },
  { id: 10, name: "Watch", price: 100, quantity: 1 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {list.map((product) => (
          <Product
            key={product.id}
            item={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
