import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import image from "./image/petli.png";

const initialState = {
  cartAmount: 2,
  searchInput: "",
  isSearching: false,
  totalAmount: 1000,
  initialReqResult: [
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
  ],
  searchResult: [],
  categories: [],
  brandsLogo: [],
};

export const getCategories = createAsyncThunk(
  "shop/getCategories",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://zamki-strapi.codium.pro/api/categories?populate=*"
    );
    dispatch(setCategories(res.data.data));
  }
);

export const getBrandsLogo = createAsyncThunk(
  "shop/getBrandsLogo",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://zamki-strapi.codium.pro/api/brands?populate=*"
    );
    dispatch(setBrandsLogo(res.data.data));
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    searchHandler: (state, action) => {
      state.searchInput = action.payload.toLowerCase();
      const sorted = state.initialReqResult.filter((item) => {
        return (
          item.name.toLowerCase().startsWith(state.searchInput.toLowerCase()) ||
          item.country.toLowerCase().startsWith(state.searchInput.toLowerCase())
        );
      });
      state.searchResult = [...sorted];

      if (action.payload.toLowerCase()) {
        state.isSearching = true;
      } else {
        state.isSearching = false;
      }
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setBrandsLogo: (state, action) => {
      state.brandsLogo = action.payload;
    },
  },
});

export const {
  addTodo,
  completeHandler,
  searchHandler,
  setCategories,
  setBrandsLogo,
} = shopSlice.actions;
export default shopSlice.reducer;
