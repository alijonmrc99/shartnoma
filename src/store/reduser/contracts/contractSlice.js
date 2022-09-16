import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   id: null,
  attributes: {
    direction: "",
    price: "",
  },
};

export const contractSlice = createSlice({
  name: "conract",
  initialState,
  reducers: {
    defaultContr: () => {
      return initialState;
    },
    selectedContr(state, actions) {
      return actions.payload;
    },
  },
});

export const { defaultContr, selectedContr } = contractSlice.actions;
export default contractSlice.reducer;
