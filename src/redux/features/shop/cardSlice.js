import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0 || localStorage.getItem("ff-totalAmount"),
  card: JSON.parse(localStorage.getItem("ff-card")) || [],
  cardAmount: 0 || localStorage.getItem("ff-cardAmount"),
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const idx = state.card.findIndex((c) => {
        return c.img?.id === action.payload.img.id;
      });

      const candidate = state.card[idx];

      if (candidate) {
        candidate.count += action.payload.count;
        state.card[idx] = candidate;
      } else {
        state.card.push(action.payload);
      }

      state.cardAmount = state.card.reduce((acc, prev) => {
        if (acc.count) {
          return acc.count + prev.count;
        } else {
          return acc + prev.count;
        }
      }, 0);

      state.totalAmount = state.card.reduce((acc, prev) => {
        if (acc.price) {
          return acc.count * acc.price + prev.price * prev.count;
        } else {
          return acc + prev.price * prev.count;
        }
      }, 0);

      localStorage.setItem("ff-cardAmount", state.cardAmount);
      localStorage.setItem("ff-card", JSON.stringify(state.card));
      localStorage.setItem("ff-totalAmount", JSON.stringify(state.totalAmount));
    },

    deleteFromCard: (state, action) => {
      const { count, price, img } = action.payload;
      state.card = state.card.filter((c) => {
        return c.img?.id !== img?.id;
      });
      state.cardAmount -= count;
      state.totalAmount -= price * count;

      localStorage.setItem("ff-cardAmount", state.cardAmount);
      localStorage.setItem("ff-card", JSON.stringify(state.card));
      localStorage.setItem("ff-totalAmount", JSON.stringify(state.totalAmount));
    },

    reduceItemCount: (state, action) => {
      const { price, img } = action.payload;
      const idx = state.card.findIndex((c) => {
        return c.img?.id === img.id;
      });

      const candidate = state.card[idx];

      if (candidate.count > 1) {
        candidate.count--;
        state.totalAmount -= price;
        state.cardAmount--;
      } else {
        state.card = state.card.filter((c) => {
          return c.img.id !== candidate.img.id;
        });
        state.cardAmount--;
        state.totalAmount -= price;
      }

      localStorage.setItem("ff-cardAmount", state.cardAmount);
      localStorage.setItem("ff-card", JSON.stringify(state.card));
      localStorage.setItem("ff-totalAmount", JSON.stringify(state.totalAmount));
    },
  },
});

export const { reduceItemCount, deleteFromCard, addToCard } = cardSlice.actions;
export default cardSlice.reducer;
