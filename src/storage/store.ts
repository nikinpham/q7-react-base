import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./auth/slice/registerSlice";

export default configureStore({
  reducer: {
    registerReducer: registerReducer,
  },
});
