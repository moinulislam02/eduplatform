import { createSlice } from "@reduxjs/toolkit";

export const myPostSlice = createSlice({
  name: "myposts",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // //get all
    getMyPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMyPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
    },
    getMyPostFailur: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const {
  getMyPostStart,
  getMyPostSuccess,
  getMyPostFailur
} = myPostSlice.actions;

export default myPostSlice.reducer;
