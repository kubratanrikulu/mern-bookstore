import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get('http://localhost:3000/books');
  console.log(response.data.data);
  return response.data.data;
});
const bookSlice = createSlice({
  name: 'books',
  initialState: { data: [], singleBook: {}, status: 'idle', error: null, filter:'' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { setFilter } = bookSlice.actions;
export default bookSlice.reducer;