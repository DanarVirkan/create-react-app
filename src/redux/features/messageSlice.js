import { createSlice } from "@reduxjs/toolkit";
import chat from "../../data/chat.json";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    name: null,
    chat,
    opened: null,
  },
  reducers: {
    updateMessageStatus: (state, action) => {
      state.chat
        .filter((payload) => payload.id == action.payload.id)[0]
        .message.filter(
          (payload) => (payload.id == action.payload.messageId)
        )[0].status = action.payload.status;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    openChat: (state, action) => {
      state.opened = action.payload;
    },
    sendMessage: (state, action) => {
      state.chat
        .filter((payload) => payload.id == action.payload.id)[0]
        .message.push(action.payload.message);
    },
    updateUnread: (state, action) => {
      state.chat.filter(
        (payload) => payload.id == action.payload
      )[0].unread = 0;
    },
  },
});

export const {
  sendMessage,
  updateUnread,
  openChat,
  setName,
  updateMessageStatus,
} = messageSlice.actions;
export default messageSlice.reducer;
