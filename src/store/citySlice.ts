import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: '',
  name: '',
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.query = action.payload;
      state.name = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
