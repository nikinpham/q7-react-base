import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    error: false,
    message: String,
  },
  reducers: {
    register: (state) => {
      state.isLoading = true;
    },
    registerSucceed: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    registerFailed: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.error = true;
    },
  },
});

export const { register, registerSucceed, registerFailed } =
  registerSlice.actions;
export default registerSlice.reducer;
