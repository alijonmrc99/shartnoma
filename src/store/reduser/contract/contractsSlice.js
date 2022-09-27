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
      console.log(1);
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
      state.body.forEach((item) => {
        if (item.id == actions.payload.id)
          item.contract_id = actions.payload.body.data.id;
      });

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
      console.log(state);
      state.body.data.forEach((item, index) => {
        if (item.id === actions?.payload?.data?.id) {
          state.body.data[index].attributes.direction =
            actions.payload.data.attributes.direction;
          state.body.data[index].attributes.price =
            actions.payload.data.attributes.price;
        }
      });

      state.failed = "";
    },
    [editAsync.rejected]: (state, actions) => {
      console.log(actions);
      state.loading = false;
      state.failed = actions.payload;
    },

    [deleteAsync.pending]: (state) => {
      state.loading = true;
    },
    [deleteAsync.fulfilled]: (state, actions) => {
      state.loading = false;
      state.body.forEach((item) => {
        if (item.id == actions.payload.id) item.contract_id = null;
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
