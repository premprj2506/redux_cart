import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../redux/Cart/cartSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center text-center py-8 px-4">
        <h3 className="text-2xl font-extrabold mb-4">Your cart is empty.</h3>
        <button
          onClick={() => navigate("/redux_cart")}
          className="text-lg font-bold text-white bg-[#5A827E] w-full max-w-xs rounded-md py-2 transition transform duration-100 active:scale-90"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFFCA] w-full px-4 sm:px-6 lg:px-12 py-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
        Your Cart
        <span className="pl-2 text-2xl sm:text-3xl">
          <HiOutlineShoppingCart />
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Cart Items */}
        <div className="flex-1">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-[#B9D4AA] rounded-md overflow-hidden"
              >
                <div className="flex items-center w-full sm:w-[75%] p-2 sm:p-4">
                  <div className="w-24 h-24 bg-white p-1 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-3 sm:px-4 text-sm sm:text-base md:text-lg break-words">
                    <strong>{item.title}</strong>
                    <div>
                      ₹{item.price} × {item.quantity} ={" "}
                      <strong>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="bg-[#84AE92] w-full sm:w-[25%] flex justify-evenly items-center py-2 text-lg sm:text-xl">
                  <button
                    className="transition transform duration-100 active:scale-90"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <FaPlus />
                  </button>
                  <button
                    className="transition transform duration-100 active:scale-90"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <FaMinus />
                  </button>
                  <button
                    className="transition transform duration-100 active:scale-90"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary */}
        <div className="bg-[#B9D4AA] w-full lg:w-[30%] rounded-md flex flex-col items-center p-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Total: ₹{getTotal().toFixed(2)}
          </h3>

          <button
            className="text-base sm:text-lg font-bold text-white bg-[#5A827E] w-full rounded-md py-2 transition transform duration-100 active:scale-95"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
