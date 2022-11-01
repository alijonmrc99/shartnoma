import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const deleteContractAsync = createAsyncThunk(
  "monitoringSlice/deleteAsync",
  (data) => {
    return axios
      .delete(data.path, {
        headers: {
          Authorization: "Bearer " + data.token,
        },
      })
      .then((res) => {
        return { body: res.data, id: data.id };
      })
      .catch((error) => error.response.statusText);
  }
);

export default deleteContractAsync;
