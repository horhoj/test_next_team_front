import { configureStore } from '@reduxjs/toolkit';
import { messageBoardSlice } from '@/store/messageBoard';

export const store = configureStore({
  devTools: true,
  reducer: {
    messageBoard: messageBoardSlice.reducer,
  },
});
