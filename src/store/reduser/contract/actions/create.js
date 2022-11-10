import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../components/axios/Axios";

const createAsync = createAsyncThunk(
  "contractsTypes/createContractAsync",
  (data) => {
    delete data.body.id;

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
      .then((res) => {
        console.log(res.data, data.body.student);
        return { body: res.data, id: data.body.student };
      })
      .catch((error) => error.response.statusText);
  }
);

export default createAsync;
