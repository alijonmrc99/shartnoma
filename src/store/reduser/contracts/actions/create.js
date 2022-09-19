import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const createAsync = createAsyncThunk(
  "createContract/createContractAsync",
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
      .then((res) => res.data)
      .catch((error) => error.response.statusText);
  }
);

export default createAsync;
