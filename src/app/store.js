import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import SidebarSlice from "../features/sidebar/SidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
  },
});
