import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/store/messageBoard/types';
import { api } from '@/api/index';
import { MessageBoardItem } from '@/entityTypes/messageBoard';
import { actions } from '@/store/messageBoard/slice';
import { requestExecutor } from '@/store/helpers';

interface AddNewMessageThunkPayload {
  data: Omit<MessageBoardItem, 'id'>;
  successCb: () => void;
}

export const addNewMessageThunk = createAsyncThunk(
  `${SLICE_NAME}/addNewMessageThunk`,
  async (
    { data, successCb }: AddNewMessageThunkPayload,
    { dispatch, rejectWithValue },
  ) => {
    return requestExecutor(async () => {
      const newMessage = await api.messageBoard.addNewMessage(data);
      dispatch(actions.addNewMessageToLocalStore(newMessage));
      successCb();
    }, rejectWithValue);
  },
);
