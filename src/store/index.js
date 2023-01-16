import { configureStore } from "@reduxjs/toolkit";
import { signIN } from "../reducers/signIN";
import { shoppingCartSlice } from "../reducers/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    cart: shoppingCartSlice.reducer,
    auth: signIN.reducer,
  },
});
