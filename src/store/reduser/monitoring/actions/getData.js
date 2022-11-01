import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const getAsync = createAsyncThunk("monitoringSlice/getCont", (data) => {
  return axios
    .get(data.path, {
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.statusText);
});

export default getAsync;
