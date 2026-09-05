import { createSlice } from "@reduxjs/toolkit";

const activeCardSlice = createSlice({
  name: "activeSlice",
  initialState: "",
  reducers: {
    setActiveCard: (_, action) => {
      return action.payload;
    },
  },
});

export const { setActiveCard } = activeCardSlice.actions;
export default activeCardSlice.reducer;
