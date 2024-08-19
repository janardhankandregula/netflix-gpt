import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    language: "English",
  },
  reducers: {
    addUser(state, action) {
      const { email, uid, name, photo } = action.payload;
      state.user = { email, uid, name, photo };
    },
    removeUser: (state) => {
      state.user = null;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { addUser, removeUser, setLanguage } = userSlice.actions;
export default userSlice.reducer;
