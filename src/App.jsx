import Cart from "./Componets/Cart";
import Navbar from "./Componets/Navbar";
import ProductList from "./Componets/ProductList";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen bg-[#FAFFCA] pt-6 px-4 sm:px-6 lg:px-12 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/redux_cart" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
