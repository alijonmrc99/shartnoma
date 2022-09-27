import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const createAsync = createAsyncThunk(
  "contractsTypes/createContractAsync",
  (data) => {
    return axios
      .post(
        data.path,
        { data: data.body },
        {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        }
      )
      .then((res) => ({ body: res.data, id: data.body.student }))
      .catch((error) => error.response.statusText);
  }
);

export default createAsync;
