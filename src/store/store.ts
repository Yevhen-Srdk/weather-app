import { configureStore } from "@reduxjs/toolkit";
import cityQueryReducer from "./cityQuerySlice";
import { weatherApi } from "./weatherApi";

export const store = configureStore({
  reducer: {
    cityQuery: cityQueryReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
