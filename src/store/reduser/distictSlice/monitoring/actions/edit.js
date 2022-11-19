import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const editAsync = createAsyncThunk(
  "monitoringSlice/editContractAsync",
  (data) => {
    return axios
      .put(
        data.path,
        {
          data: data.body,
        },
        {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
export default editAsync;
