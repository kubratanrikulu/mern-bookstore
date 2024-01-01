
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalCount: 0  },
  reducers: {
    addToCart: (state, action) => {
      const {book, count} = action.payload
      if (count && count > 0) {
        for (let index = 0; index < count; index++) {
          state.totalCount+= 1
          state.items = [...state.items, book];
        }
      }else {
        state.totalCount+= 1
          state.items = [...state.items, book];
      }
    },
    removeCartItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const removeBook = state.items.filter((item) => item._id == itemIdToRemove)
      state.totalCount -= removeBook.length
      state.items = state.items.filter((item) => item._id !== itemIdToRemove);
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
   }
  },
});

export const { addToCart, removeCartItem, setTotalCount } = cartSlice.actions;
export default cartSlice.reducer;
