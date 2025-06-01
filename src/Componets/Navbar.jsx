import { PiShoppingCartBold } from "react-icons/pi";
import { TbHexagonLetterN } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-[#84AE92] w-full h-16 sm:h-20 px-4 sm:px-6 lg:px-8 mx-auto rounded-xl mb-4 overflow-hidden relative">
      <h1 className="text-[#FAFFCA] font-extrabold tracking-[4px] text-3xl sm:text-4xl lg:text-5xl flex items-center">
        <span
          className="rounded-full overflow-hidden w-10 sm:w-14 flex justify-center text-4xl sm:text-5xl mr-4"
          onClick={() => navigate("/redux_cart")}
        >
          <img
            src="https://media.istockphoto.com/id/1276423485/vector/shopping-bag-design-icon-shopping-logo-shop-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=zIXXDNLbrUdXx7LqKcRjxEzO8KUXzvZnh26IvkKngkU="
            alt="logo"
            className=" object-cover scale-[1.5]"
          />
        </span>
        <span className="hidden sm:inline">SHOPPING CART</span>
        <span className="sm:hidden">CART</span>
      </h1>
      <div className="relative">
        <button
          onClick={() => navigate("/redux_cart/cart")}
          className="text-[2rem] sm:text-[2.5rem] text-[#5A827E] bg-[#B9D4AA] p-2 rounded-full flex items-center justify-center transition transform duration-100 active:scale-90"
        >
          <PiShoppingCartBold />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-sm px-1.5 rounded-full">
            {totalItems}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
