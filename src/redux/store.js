import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../redux/features/messageSlice";

export default configureStore({
  reducer: {
    message: messageReducer,
  },
});
