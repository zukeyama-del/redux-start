import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, actions) => {
      const cartItems = state.cartItems.find(
        (item) => (item.id = actions.payload)
      );
      cartItems.amount = cartItems.amount + 1;
    },
    decrease: (state, actions) => {
      const cartItems = state.cartItems.find(
        (item) => (item.id = actions.payload)
      );
      cartItems.amount = cartItems.amount - 1;
    },
    calulateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calulateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
