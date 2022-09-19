import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const getAsync = createAsyncThunk("users/getConracts", (data) => {
  return axios
    .get(data.path, {
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response.statusText);
});

export default getAsync;
