import React from "react";

const Product = ({ item, handleAddToCart }) => {
  return (
    <div className="flex-1 min-w-[14rem] max-w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] rounded-xl bg-[#B9D4AA] flex flex-col justify-between overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300">
      {/* Placeholder for Image */}
      <div className="w-full h-[50%] bg-[#84AE92]"></div>

      {/* Product Info */}
      <div className="px-4 py-2 flex flex-col gap-1 text-sm sm:text-base">
        <span className="font-medium">{item.name}</span>
        <span className="font-extrabold">&#8377;{item.price}</span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => handleAddToCart(item)}
        className="cursor-pointer px-4 py-2 bg-[#5A827E] text-white font-bold hover:bg-[#46655F] transition-colors"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
