import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  menuToggler: true,
  logoutToggler: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialValue,
  reducers: {
    menuToggle: (state) => {
      state.menuToggler = !state.menuToggler;
    },
    exitToggle: (state) => {
      state.logoutToggler = !state.logoutToggler;
    },
  },
});

export const { menuToggle, exitToggle } = menuSlice.actions;
export default menuSlice.reducer;
