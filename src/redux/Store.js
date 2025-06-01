import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/cartSlice";
import filterReducer from "./Cart/filterSlice";
import productReducer from "./Product/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
  },
});
