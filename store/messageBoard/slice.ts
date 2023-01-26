import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as thunks from './thunks';
import { SLICE_NAME } from '@/store/messageBoard/types';
import { RequestSliceStateProperty } from '@/store/types';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '@/store/helpers';
import { MessageBoardItem } from '@/entityTypes/messageBoard';

interface InitialState {
  addNewMessageRequest: RequestSliceStateProperty;
  messagesAddedInTheCurrentSession: MessageBoardItem[];
}

const initialState: InitialState = {
  addNewMessageRequest: makeRequestSliceStateProperty(),
  messagesAddedInTheCurrentSession: [],
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
    addNewMessageToLocalStore: (
      state,
      action: PayloadAction<MessageBoardItem>,
    ) => {
      state.messagesAddedInTheCurrentSession.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.addNewMessageThunk,
      'addNewMessageRequest',
    );
  },
});
