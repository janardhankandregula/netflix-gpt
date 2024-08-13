import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    newMovies: null,
    videoTrailer: null,
  },
  reducers: {
    setNewMovies(state, action) {
      state.newMovies = action.payload;
    },
    setTrailer(state, action) {
      state.videoTrailer = action.payload;
    },
  },
});
export const { setNewMovies, setTrailer } = movieSlice.actions;

export default movieSlice.reducer;
