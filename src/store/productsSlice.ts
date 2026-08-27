import { createSlice } from "@reduxjs/toolkit";
import type { Products } from "../types/ProductsType";

const initialState: Products = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
