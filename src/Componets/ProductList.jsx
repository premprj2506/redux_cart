import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Product/productSlice"; // async thunk
import { addItem } from "../redux/Cart/cartSlice";
import Product from "./Product";
import Filters from "./Filters";

const ProductList = () => {
  const dispatch = useDispatch();

  // Get filter values from Redux
  const { category, priceRange, searchTerm } = useSelector(
    (state) => state.filters
  );

  // Get product data from Redux
  const { items: list, status, error } = useSelector((state) => state.products);

  // Fetch products from API when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Apply filtering logic based on filter state
  const filteredProducts = list.filter((product) => {
    const productCategory = product.category?.toLowerCase();
    const selectedCategory = category.toLowerCase();
    const selectedPrice = priceRange.toLowerCase();

    // Category Filter
    if (selectedCategory !== "all" && productCategory !== selectedCategory)
      return false;

    // Price Filter
    if (
      (selectedPrice === "under25" && product.price >= 25) ||
      (selectedPrice === "25to50" &&
        (product.price < 25 || product.price > 50)) ||
      (selectedPrice === "above50" && product.price <= 50)
    )
      return false;

    // Search Filter (FIXED: product.title)
    if (
      searchTerm &&
      !product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;

    return true;
  });

  // Add product to cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Handle loading and error states from async fetch
  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
      {/* Filter Panel */}
      <Filters />

      {/* Product Grid */}
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
