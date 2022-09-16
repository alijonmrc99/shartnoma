import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../components/axios/Axios";
import { initialState } from "../initailState";

export const createContractAsync = createAsyncThunk(
  "createContract/createContractAsync",
  (data) => {
    console.log(data);
    return axios
      .post(
        "/contract-types",
        { data: data.body },
        {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  }
);

export const createContractSlice = createSlice({
  name: "createContract",
  initialState,
  extraReducers: {
    [createContractAsync.pending]: (state) => {
      state.loading = true;
    },
    [createContractAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body = actions.payload;
      state.failed = "";
    },
    [createContractAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.body = [];
      state.failed = actions.payload;
    },
  },
});

export default createContractSlice.reducer;
