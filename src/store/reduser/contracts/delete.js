import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../components/axios/Axios";

const deleteContractAsync = createAsyncThunk(
  "contractTypes/editContractAsync",
  (data) => {
    console.log("contract-types/" + data.id);
    return axios
      .delete("contract-types/" + data.id, {
        headers: {
          Authorization: "Bearer " + data.token,
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response.statusText);
  }
);

export default deleteContractAsync;
