import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contract_number: "",
  beginning_date: "",
  due_date: "",
  contract_type: "",
  student: "",
  id: undefined,
};

export const contractSlice = createSlice({
  name: "conract",
  initialState,
  reducers: {
    defaultContr: (state, actions) => {
      let data = { ...initialState };
      data.student = actions.payload;
      return data;
    },
    selectedContr(state, actions) {
      return actions.payload;
    },
  },
});

export const { defaultContr, selectedContr } = contractSlice.actions;
export default contractSlice.reducer;
