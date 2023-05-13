import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // //get all
    getPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
    },
    getPostFailur: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const {
  getPostStart,
  getPostSuccess,
  getPostFailur
} = postSlice.actions;

export default postSlice.reducer;
