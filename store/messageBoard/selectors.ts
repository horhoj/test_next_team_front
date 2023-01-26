import { RootState } from '@/store/types';

export const getIsLoading = (state: RootState) =>
  state.messageBoard.addNewMessageRequest.isLoading;

export const getMessagesAddedInTheCurrentSession = (state: RootState) =>
  state.messageBoard.messagesAddedInTheCurrentSession;

export const getAddNewMessageRequest = (state: RootState) =>
  state.messageBoard.addNewMessageRequest;
