import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "./BlogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async () => {
    const blogs = getBlogs();
    return blogs;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
