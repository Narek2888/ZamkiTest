import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios";
import _ from "lodash";

const initialState = {
  searchInput: "",
  isSearching: false,
  initialReqResult: [],
  searchResult: [],
};

export const getItems = createAsyncThunk(
  "shop/getItems",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("/items?populate[images][populate][0]=image");
    dispatch(setItems(res.data.data));
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchHandler: (state, action) => {
      state.searchInput = action.payload?.toLowerCase();

      const filtered = _.filter(state.initialReqResult, (item) => {
        return (
          _.includes(
            _.lowerCase(item.attributes.name).trim(),
            _.lowerCase(action.payload)
          ) ||
          _.includes(
            _.lowerCase(item.attributes.description).trim(),
            _.lowerCase(action.payload)
          )
        );
      });

      state.searchResult = [...filtered];

      if (action.payload.toLowerCase()) {
        state.isSearching = true;
      } else {
        state.isSearching = false;
      }
    },

    removeSearchResult: (state) => {
      state.isSearching = false;
      state.searchInput = "";
      state.searchResult = [];
    },

    handleSelectCategory: (state, action) => {
      state.isSearching = true;
      state.searchResult = [...action.payload];
    },

    setItems: (state, action) => {
      state.initialReqResult = action.payload;
    },
  },
});

export const {
  searchHandler,
  setCategories,
  handleSelectCategory,
  removeSearchResult,
  setItems,
} = searchSlice.actions;
export default searchSlice.reducer;
