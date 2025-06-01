import Product from "./Product";
import { addItem } from "../redux/Cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Filters from "./Filters";

const list = [
  { id: 1, name: "T-Shirt", price: 20, quantity: 2, category: "Clothing" },
  { id: 2, name: "Jeans", price: 40, quantity: 1, category: "Clothing" },
  { id: 3, name: "Sneakers", price: 60, quantity: 1, category: "Footwear" },
  { id: 4, name: "Jacket", price: 80, quantity: 1, category: "Clothing" },
  { id: 5, name: "Cap", price: 15, quantity: 3, category: "Accessories" },
  { id: 6, name: "Socks", price: 5, quantity: 5, category: "Accessories" },
  { id: 7, name: "Hoodie", price: 50, quantity: 2, category: "Clothing" },
  { id: 8, name: "Shorts", price: 25, quantity: 2, category: "Clothing" },
  { id: 9, name: "Belt", price: 10, quantity: 1, category: "Accessories" },
  { id: 10, name: "Watch", price: 100, quantity: 1, category: "Accessories" },
  { id: 11, name: "Sandals", price: 30, quantity: 1, category: "Footwear" },
  { id: 12, name: "Scarf", price: 12, quantity: 2, category: "Accessories" },
  { id: 13, name: "Gloves", price: 18, quantity: 1, category: "Accessories" },
  { id: 14, name: "Boots", price: 70, quantity: 1, category: "Footwear" },
  { id: 15, name: "Sweater", price: 45, quantity: 1, category: "Clothing" },
  { id: 16, name: "Tank Top", price: 22, quantity: 2, category: "Clothing" },
  { id: 17, name: "Leggings", price: 35, quantity: 1, category: "Clothing" },
  {
    id: 18,
    name: "Sunglasses",
    price: 55,
    quantity: 1,
    category: "Accessories",
  },
  { id: 19, name: "Loafers", price: 65, quantity: 1, category: "Footwear" },
  { id: 20, name: "Raincoat", price: 90, quantity: 1, category: "Clothing" },
  { id: 21, name: "Backpack", price: 75, quantity: 1, category: "Accessories" },
  { id: 22, name: "Dress", price: 85, quantity: 1, category: "Clothing" },
  { id: 23, name: "Slippers", price: 20, quantity: 2, category: "Footwear" },
  { id: 24, name: "Bracelet", price: 30, quantity: 1, category: "Accessories" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const { category, priceRange, searchTerm } = useSelector(
    (state) => state.filters
  );

  // Apply filters
  const filteredProducts = list.filter((product) => {
    const productCategory = product.category.toLowerCase();
    const selectedCategory = category.toLowerCase();
    const selectedPrice = priceRange.toLowerCase();

    // Category filter
    if (selectedCategory !== "all" && productCategory !== selectedCategory)
      return false;

    // Price filter
    if (
      (selectedPrice === "under25" && product.price >= 25) ||
      (selectedPrice === "25to50" &&
        (product.price < 25 || product.price > 50)) ||
      (selectedPrice === "above50" && product.price <= 50)
    )
      return false;

    // Search filter
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;

    return true;
  });

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <Filters />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              item={product}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
