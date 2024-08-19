import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: true,
  },
  reducers: {
    setGptToggle(state, action) {
      state.gptToggle = !state.gptToggle;
    },
  },
});

export const { setGptToggle } = gptSlice.actions;
export default gptSlice.reducer;
