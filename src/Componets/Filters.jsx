import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setPriceRange,
  setSearchTerm,
  clearFilter,
} from "../redux/Cart/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { category, priceRange, searchTerm } = useSelector(
    (state) => state.filters
  );

  return (
    <div className="w-full mb-6 px-4">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>

      <div className="flex flex-col md:flex-row md:items-end md:gap-4 gap-3 justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4"
        >
          <option value="all">All</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="footwear">Footwear</option>
        </select>

        {/* Price Range */}
        <select
          value={priceRange}
          onChange={(e) => dispatch(setPriceRange(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4"
        >
          <option value="all">All Prices</option>
          <option value="under25">Under ₹25</option>
          <option value="25to50">₹25 - ₹50</option>
          <option value="above50">Above ₹50</option>
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={() => dispatch(clearFilter())}
          className="bg-red-500 text-white rounded-md px-8 py-2 w-full md:w-auto"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
