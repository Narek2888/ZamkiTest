import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/shop/cardSlice";
import searchSlice from "../features/shop/searchSlice";
import shopSlice from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopSlice,
    card: cardSlice,
    search: searchSlice,
  },
});
