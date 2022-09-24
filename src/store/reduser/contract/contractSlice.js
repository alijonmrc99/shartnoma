import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   id: null,
  attributes: {
    contract_number: "",
    beginning_date: "",
    due_date: "",
    contract_type: "",
    student: "",
  },
};

export const directionSlice = createSlice({
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

export const { defaultContr, selectedContr } = directionSlice.actions;
export default directionSlice.reducer;
