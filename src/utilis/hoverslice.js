import { createSlice } from "@reduxjs/toolkit";
import { hover } from "@testing-library/user-event/dist/hover";

const hoverSlice = createSlice({
  name: "hover",
  initialState: {
    hoverToggle: false,
    hoverid: null,
    hoverVideo: null,
    hoverTitle: null,
    hoverRating: null,
  },
  reducers: {
    sethoverToggle(state, action) {
      state.hoverToggle = true;
    },
    hoverFalse(state) {
      state.hoverToggle = false;
    },
    sethoverId(state, action) {
      state.hoverid = action.payload;
    },
    deleteHoverId(state) {
      state.hoverid = null;
    },
    setHoverVideo(state, action) {
      state.hoverVideo = action.payload;
    },
    setHoverTitle(state, action) {
      state.hoverTitle = action.payload;
    },
    setHoverRating(state, action) {
      state.hoverRating = action.payload;
    },
  },
});

export const {
  sethoverToggle,
  hoverFalse,
  sethoverId,
  deleteHoverId,
  setHoverVideo,
  setHoverTitle,
  setHoverRating,
} = hoverSlice.actions;
export default hoverSlice.reducer;
