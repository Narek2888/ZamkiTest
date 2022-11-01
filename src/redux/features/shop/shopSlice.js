import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios";

const initialState = {
  categories: [],
  brandsLogo: [],
  novinki: [],
};

export const getBrandsLogo = createAsyncThunk(
  "shop/getBrandsLogo",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "/brands?populate=*"
    );
    dispatch(setBrandsLogo(res.data.data));
  }
);

export const getNovinki = createAsyncThunk(
  "shop/getItems",
  async (_, { dispatch }) => {
    const res = await axios.get(
      "/items?filters[new]=true&populate=deep,3"
    );
    dispatch(setNovinki(res.data.data));
  }
);

export const getCategories = createAsyncThunk(
  "search/getCategories",
  async (_, { state, rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "/categories?populate=deep"
    );

    dispatch(setCategories(res.data.data));
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setBrandsLogo: (state, action) => {
      state.brandsLogo = action.payload;
    },

    setNovinki: (state, action) => {
      state.novinki = action.payload;
    },
  },
});

export const { setCategories, setBrandsLogo, setNovinki } = shopSlice.actions;
export default shopSlice.reducer;
