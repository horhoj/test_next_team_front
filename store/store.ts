import { configureStore } from '@reduxjs/toolkit';
import { messageBoardSlice } from '@/store/messageBoard';
import { averageNumbersSlice } from '@/store/averageNumbers';

export const store = configureStore({
  devTools: true,
  reducer: {
    messageBoard: messageBoardSlice.reducer,
    averageNumbers: averageNumbersSlice.reducer,
  },
});
