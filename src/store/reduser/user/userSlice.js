import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  id: 1,
  attributes: {
    First_name: "",
    Last_name: "",
    Fathers_name: "",
    passport: null,
    phone: null,
    district: null,
    region: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    defaultUser: (state, actions) => {
      return initialData;
    },
  },
});

export const { defaultUser } = userSlice.actions;
export default userSlice.reducer;
