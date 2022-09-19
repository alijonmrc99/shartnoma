import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const deleteAsync = createAsyncThunk("users/deleteAsync", (data) => {
  return axios
    .delete(data.path, {
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response.statusText);
});

export default deleteAsync;
