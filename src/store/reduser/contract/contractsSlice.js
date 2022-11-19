import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initailState";
/* Import actions */
import deleteAsync from "./actions/delete";
import getAsync from "./actions/getData";
import createAsync from "./actions/create";
import editAsync from "./actions/edit";

export const contractsTypesSlice = createSlice({
  name: "contractsTypes",
  initialState: initialState,

  extraReducers: {
    [getAsync.pending]: (state) => {
      state.loading = true;
    },
    [getAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body = actions.payload;
      state.failed = "";
    },
    [getAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.body = [];
      state.failed = actions.payload;
    },

    [createAsync.pending]: (state) => {
      state.loading = true;
    },
    [createAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data.push(actions.payload.body.data);

      state.failed = "";
    },
    [createAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },

    [editAsync.pending]: (state) => {
      state.loading = true;
    },
    [editAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data.forEach((item, index) => {
        if (item.id === actions?.payload?.data?.id) {
          console.log(actions.payload.data.attributes);
          state.body.data[index].attributes = actions.payload.data.attributes;
        }
      });

      state.failed = "";
    },
    [editAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },

    [deleteAsync.pending]: (state) => {
      state.loading = true;
    },
    [deleteAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.data = state.body.data.filter((item) => {
        return +item.id !== actions.payload.id;
      });
      state.failed = "";
    },
    [deleteAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },
  },
});

export default contractsTypesSlice.reducer;
