import { configureStore } from "@reduxjs/toolkit";
import cityQueryReducer from "./cityQuerySlice";
import activeCardReduced from './activeCardSlice';
import { weatherApi } from "./weatherApi";

export const store = configureStore({
  reducer: {
    cityQuery: cityQueryReducer,
    activeCard: activeCardReduced,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
