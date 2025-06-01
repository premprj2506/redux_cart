import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/cartSlice";
import filterReducer from "./Cart/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
  },
});
