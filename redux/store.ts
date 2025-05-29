import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
