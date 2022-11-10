import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initailState";
/* Import actions */
import deleteAsync from "./actions/delete";
import getAsync from "./actions/getData";
import createAsync from "./actions/create";
import editAsync from "./actions/edit";

export const usersSlice = createSlice({
  name: "users",
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
      console.log(actions.payload.data);
      state.loading = false;
      state.body.data.push(actions.payload.data);
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
          state.body.data[index].attributes.First_name =
            actions.payload.data.attributes.First_name;
          state.body.data[index].attributes.Last_name =
            actions.payload.data.attributes.Last_name;
          state.body.data[index].attributes.Fathers_name =
            actions.payload.data.attributes.Fathers_name;
          state.body.data[index].attributes.passport =
            actions.payload.data.attributes.passport;
          state.body.data[index].attributes.phone =
            actions.payload.data.attributes.phone;
          state.body.data[index].attributes.district =
            actions.payload.data.attributes.district;
          state.body.data[index].attributes.region =
            actions.payload.data.attributes.region;
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
      state.body.data = state.body.data.filter(
        (item) => actions.payload.data.id !== item.id
      );
      state.failed = "";
    },
    [deleteAsync.rejected]: (state, actions) => {
      state.loading = false;
      state.failed = actions.payload;
    },
  },
});

export default usersSlice.reducer;
