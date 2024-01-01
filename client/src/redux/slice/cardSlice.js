
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const {book, count} = action.payload
      if (count && count > 0) {
        for (let index = 0; index < count; index++) {
          state.items = [...state.items, book];
        }
      }else {
          state.items = [...state.items, book];
      }
     
    },
    removeCartItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
