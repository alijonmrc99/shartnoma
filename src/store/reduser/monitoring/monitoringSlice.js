import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initailState";
/* Import actions */
import deleteAsync from "./actions/delete";
import getAsync from "./actions/getData";
import createAsync from "./actions/create";
import editAsync from "./actions/edit";

export const contractsTypesSlice = createSlice({
  name: "monitoringSlice",
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
      console.log(actions.payload.body.data);
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
      console.log(actions.payload.data.attributes.contract_type.data.attributes.direction);
      state.body.data.forEach((item, index) => {
        if (item.id === actions?.payload?.data?.id) {
          state.body.data[index].attributes.beginning_date =
            actions.payload.data.attributes.beginning_date;
          state.body.data[index].attributes.due_date = actions.payload.data.attributes.due_date;
          state.body.data[index].attributes.contract_type.data.attributes.direction =
            actions.payload.data.attributes.contract_type.data.attributes.direction;
          state.body.data[index].attributes.contract_number =
            actions.payload.data.attributes.contract_number;
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
      state.body.data = state.body.data.filter((item) => {
        console.log(+item.id !== actions.payload.id);
        return +item.id !== actions.payload.id
      }
      );
      state.failed = "";
    },
    [deleteAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },
  },
});

export default contractsTypesSlice.reducer;
