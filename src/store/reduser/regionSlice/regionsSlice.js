import regions from "./regions.json";
import { createSlice } from "@reduxjs/toolkit";
const initialState = regions;

export const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    getRegions: (state) => state,
  },
});

export const { getRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
