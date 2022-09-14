import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  attributes: {
    First_name: "",
    Last_name: "",
    Fathers_name: "",
    passport: "",
    phone: "",
    district: 0,
    region: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    defaultUser: () => {
      return initialState;
    },
    selectedUser(state, actions) {
      return actions.payload;
    },
  },
});

export const { defaultUser, selectedUser } = userSlice.actions;
export default userSlice.reducer;
