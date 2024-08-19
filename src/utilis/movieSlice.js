import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    newMovies: null,
    videoTrailer: null,
    popularMovies: null,
    TopRatedMovies: null,
    upComingMovies: null,
    movieData: {},
  },
  reducers: {
    setNewMovies(state, action) {
      state.newMovies = action.payload;
    },
    setTrailer(state, action) {
      state.videoTrailer = action.payload;
    },
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies(state, action) {
      state.TopRatedMovies = action.payload;
    },
    setUpComingMovies(state, action) {
      state.upComingMovies = action.payload;
    },
    setMovieData(state, action) {
      state.movieData = action.payload;
    },
    removeMoieData(state) {
      state.movieData = {};
    },
  },
});
export const {
  setNewMovies,
  setTrailer,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
  setMovieData,
  removeMoieData,
} = movieSlice.actions;

export default movieSlice.reducer;
