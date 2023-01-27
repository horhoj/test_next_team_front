import { RootState } from '@/store/types';

export const getIsLoading = (state: RootState) =>
  state.averageNumbers.fetchHistoryRequest.isLoading ||
  state.averageNumbers.addAverageRequest.isLoading;

export const getFetchHistoryRequest = (state: RootState) =>
  state.averageNumbers.fetchHistoryRequest;

export const getAddAverageRequest = (state: RootState) =>
  state.averageNumbers.addAverageRequest;

export const getLocalHistory = (state: RootState) =>
  state.averageNumbers.localHistory;
