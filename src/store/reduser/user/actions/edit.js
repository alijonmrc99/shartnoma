import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const editAsync = createAsyncThunk("users/editContractAsync", (data) => {
  return axios
    .put(
      data.path,
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
    .catch((error) => {
      console.log(error);
    });
});
export default editAsync;
