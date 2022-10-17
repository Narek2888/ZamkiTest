import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartAmount: 2,
  searchInput: "",
  isSearching: false,
  totalAmount: 1000,
  initialReqResult: [],
  searchResult: [],
  categories: [],
  brandsLogo: [],
  novinki: [],
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

export const getItems = createAsyncThunk(
  "shop/getItems",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://zamki-strapi.codium.pro/api/items?populate[images][populate][0]=image"
    );
    dispatch(setItems(res.data.data));
  }
);

export const getNovinki = createAsyncThunk(
  "shop/getItems",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://zamki-strapi.codium.pro/api/items?populate[images][populate][0]=image&sort[0]=createdAt:desc"
    );
    dispatch(setNovinki(res.data.data));
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    searchHandler: (state, action) => {
      state.searchInput = action.payload?.toLowerCase();
      const sorted = state?.initialReqResult?.filter((item) => {
        console.log(current(item));
        return (
          item.attributes.name
            ?.toLowerCase()
            .startsWith(state.searchInput.toLowerCase()) ||
          item.attributes.category
            ?.toLowerCase()
            .startsWith(state.searchInput.toLowerCase()) ||
          item.attributes.category
            ?.toLowerCase()
            .includes(state.searchInput.toLowerCase())
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

    setItems: (state, action) => {
      state.initialReqResult = action.payload;
    },

    setNovinki: (state, action) => {
      state.novinki = action.payload;
    },
  },
});

export const {
  addTodo,
  completeHandler,
  searchHandler,
  setCategories,
  setBrandsLogo,
  setNovinki,
  setItems,
} = shopSlice.actions;
export default shopSlice.reducer;
