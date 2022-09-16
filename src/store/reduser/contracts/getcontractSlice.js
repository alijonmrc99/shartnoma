import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../components/axios/Axios";
import { initialState } from "../initailState";

export const getContracts = createAsyncThunk(
  "contractTypes/getConracts",
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
        return res.data;
      });
  }
);

export const getContractTypesSlice = createSlice({
  name: "contractTypes",
  initialState: initialState,
  reducers: {
    addContract(state, actions) {
      state.body.data.push(actions.payload);
    },
  },
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

    [createContractAsync.pending]: (state) => {
      state.loading = true;
    },
    [createContractAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data.push(actions.payload.data);
      state.failed = "";
    },
    [createContractAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },
  },
});

export const { addContract } = getContractTypesSlice.actions;

export default getContractTypesSlice.reducer;
