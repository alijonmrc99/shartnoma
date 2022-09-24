import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  menuToggler: true,
  logoutToggler: false,
  userModalTogler: false,
  directionModalTogler: false,
  contractModalToggler: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialValue,
  reducers: {
    menuToggle: (state) => {
      state.menuToggler = !state.menuToggler;
    },
    userModalToggle: (state, actions) => {
      state.userModalTogler = actions.payload;
    },
    directionModalTogle: (state, actions) => {
      state.directionModalTogler = actions.payload;
    },
    contractModalToggle: (state, actions) => {
      state.contractModalToggler = actions.payload;
    },
    exitToggle: (state) => {
      state.logoutToggler = !state.logoutToggler;
    },
  },
});

export const {
  menuToggle,
  exitToggle,
  userModalToggle,
  contractModalToggle,
  directionModalTogle,
} = menuSlice.actions;
export default menuSlice.reducer;
