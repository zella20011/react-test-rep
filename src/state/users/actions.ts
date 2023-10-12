import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, reject) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      console.log({response});
      

      return response.data;
    } catch (error) {
      return reject.rejectWithValue("fail to fetch users");
    }
  },
);
