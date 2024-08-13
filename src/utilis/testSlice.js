import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: null,
  },
  reducers: {
    addtest(state, action) {
      state.test = action.payload;
    },
  },
});

export const { addtest } = testSlice.actions;
export default testSlice.reducer;
