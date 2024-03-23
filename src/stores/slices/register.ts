import { createSlice } from "@reduxjs/toolkit";
import { register } from "../actions/register";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    error: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});
const { reducer } = registerSlice;
export default reducer;
