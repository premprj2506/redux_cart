const Product = ({ item, handleAddToCart }) => {
  return (
    <div className="flex flex-col rounded-xl bg-[#B9D4AA] shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      {/* Product Image with fixed height */}
      <div className="w-full aspect-[4/3] bg-[#84AE92] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between p-4 text-sm sm:text-base">
        <div className="mb-2">
          <h2 className="font-medium line-clamp-2">{item.title}</h2>
          <p className="font-extrabold text-lg">&#8377;{item.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(item)}
          className="rounded-md mt-auto px-4 py-2 bg-[#5A827E] text-white font-bold hover:bg-[#46655F] transition-colors transform duration-300 active:scale-90"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
