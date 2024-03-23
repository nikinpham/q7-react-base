import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/register";
import messageReducer from "./slices/message";
const reducer = {
  registerReducer,
  messageReducer,
};

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
