import AuthService from "@/services/auth";
import { TRegisterRequest } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../slices/message";

export const register = createAsyncThunk(
  "auth/register",
  async (user: TRegisterRequest, thunkAPI) => {
    try {
      const data = await AuthService.register(user);
      // save user data
      // thunkAPI.dispatch(setUserData());
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message =
        error?.response?.data?.message || error?.message || "An error occurred";
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);
