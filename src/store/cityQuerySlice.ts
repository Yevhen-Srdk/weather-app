import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

export const cityQuerySlice = createSlice({
  name: "cityQuery",
  initialState,
  reducers: {
    setCityQuery: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCityQuery } = cityQuerySlice.actions;
export default cityQuerySlice.reducer;
