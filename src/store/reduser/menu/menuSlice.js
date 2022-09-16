import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  menuToggler: true,
  logoutToggler: false,
  userModalTogler: false,
  contractModalTogler: false,
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
    contractModalToggle: (state, actions) => {
      state.contractModalTogler = actions.payload;
    },
    exitToggle: (state) => {
      state.logoutToggler = !state.logoutToggler;
    },
  },
});

export const { menuToggle, exitToggle, userModalToggle, contractModalToggle } =
  menuSlice.actions;
export default menuSlice.reducer;
