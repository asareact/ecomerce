import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "../reducers/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    cart: shoppingCartSlice.reducer,
  },
});
