import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signIn: false,
};

export const signIN = createSlice({
  name: "signIN",
  initialState,
  reducers: {
    SET_SIGN: (state, action) => {
      state.signIn = action.payload;
    },
  },
});

export const { SET_SIGN } = signIN.actions;
