import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../components/axios/Axios";
import { initialState } from "../initailState";
import deleteContractAsync from "./delete";
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
      .then((res) => res.data)
      .catch((error) => error.response.statusText);
  }
);

export const editContractAsync = createAsyncThunk(
  "contractTypes/editContractAsync",
  (data) => {
    console.log("contract-types/" + data.body.id);
    return axios
      .put(
        "contract-types/" + data.body.id,
        {
          data: data.body.attributes,
        },
        {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        }
      )
      .then((res) => res.data)
      .catch((error) => error.response.statusText);
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

    [editContractAsync.pending]: (state) => {
      state.loading = true;
    },
    [editContractAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data.forEach((item, index) => {
        if (item.id == actions?.payload?.data?.id) {
          state.body.data[index].attributes.direction =
            actions.payload.data.attributes.direction;
          state.body.data[index].attributes.price =
            actions.payload.data.attributes.price;
        }
      });

      state.failed = "";
    },
    [editContractAsync.rejected]: (state, actions) => {
      console.log(actions);
      state.loading = false;
      state.failed = actions.payload;
    },

    [deleteContractAsync.pending]: (state) => {
      state.loading = true;
    },
    [deleteContractAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data = state.body.data.filter(
        (item) => actions.payload.data.id !== item.id
      );
      state.failed = "";
    },
    [deleteContractAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },
  },
});

export const { addContract } = getContractTypesSlice.actions;

export default getContractTypesSlice.reducer;
