import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlog } from "./BlogAPI";
import { saveBlogRequest } from "./BlogSaveAPI";
import { likeBlogRequest } from "./LikeBlogAPI";

const initialState = {
  blog: {},
  saveStatus: null,
  likes: 0,
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = getBlog(id);
  return blog;
});

export const saveBlog = createAsyncThunk(
  "blogSave/saveBlog",
  async ({ id, saved }) => {
    const saveStatus = await saveBlogRequest({ id, saved });
    return saveStatus;
  }
);

export const likeBlog = createAsyncThunk(
  "blog/likeBlog",
  async ({ id, count }) => {
    const likes = await likeBlogRequest({ id, count });
    return likes;
  }
);

// slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
        state.saveStatus = action.payload.isSaved;
        state.likes = action.payload.likes;
        // console.log(action.payload);
        state.error = "";
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(saveBlog.fulfilled, (state, action) => {
        state.saveStatus = action.payload;
        state.blog.isSaved = action.payload.isSaved;
        console.log(action.payload);
      })
      .addCase(saveBlog.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(likeBlog.fulfilled, (state, action) => {
        state.likes = action.payload.likes;
        state.blog.likes = action.payload.likes;
      })
      .addCase(likeBlog.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
