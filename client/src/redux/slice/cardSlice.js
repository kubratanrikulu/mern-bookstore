
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const {book} = action.payload
      state.items = [...state.items, book];
    },
    removeCartItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
