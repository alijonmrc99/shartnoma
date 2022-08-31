import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  menuToggler: true,
  logoutToggler: false,
  modalTogler: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialValue,
  reducers: {
    menuToggle: (state) => {
      state.menuToggler = !state.menuToggler;
    },
    modalToggle: (state, actions) => {
      state.modalTogler = actions.payload;
    },
    exitToggle: (state) => {
      state.logoutToggler = !state.logoutToggler;
    },
  },
});

export const { menuToggle, exitToggle, modalToggle } = menuSlice.actions;
export default menuSlice.reducer;
