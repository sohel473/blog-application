import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../features/blog/BlogSlice";
import BlogsSlice from "../features/blogs/BlogsSlice";
// import counterReducer from "../features/counter/counterSlice";
import SidebarSlice from "../features/sidebar/SidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    blogs: BlogsSlice,
    blog: BlogSlice,
  },
});
