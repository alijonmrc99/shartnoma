import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../components/axios/Axios";
// import { useCookies } from "react-cookie";
import { initialState } from "../initailState";
// const [cookie] = useCookies();
// console.log(cookie);
export const getContracts = createAsyncThunk(
  "contracyTypes/getConracts",
  (token) => {
    return axios
      .get("/contract-types", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response.statusText);
  }
);

export const contractTypesSlice = createSlice({
  name: "contractTypes",
  initialState: initialState,
  extraReducers: {
    [getContracts.pending]: (state) => {
      state.loading = true;
    },
    [getContracts.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body = actions.payload;
      state.failed = "";
    },
    [getContracts.rejected]: (state, actions) => {
      state.loading = false;
      state.body = [];
      state.failed = actions.payload;
    },
  },
});

export default contractTypesSlice.reducer;
