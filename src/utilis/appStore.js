import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import hoverReducer from "./hoverslice";

import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    hover: hoverReducer,
  },
});
export default appStore;
