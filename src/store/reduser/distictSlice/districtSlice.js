import district from "./district.json";
import { createSlice } from "@reduxjs/toolkit";
const initialState = district;

export const districtssSlice = createSlice({
  name: "districts",
  initialState,
  reducers: {
    getDistricts: (state) => state,
  },
});

export const { getDistricts } = districtssSlice.actions;
export default districtssSlice.reducer;
