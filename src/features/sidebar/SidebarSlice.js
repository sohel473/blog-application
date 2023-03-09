import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sort: "",
    filter: "all",
  },
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setSort, setFilter } = sidebarSlice.actions;

export default sidebarSlice.reducer;
