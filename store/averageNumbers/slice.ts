import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as thunks from './thunks';
import { SLICE_NAME } from '@/store/averageNumbers/types';
import { RequestSliceStateProperty } from '@/store/types';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '@/store/helpers';
import { AverageHistoryItem } from '@/entityTypes/averageNumbers';

interface InitialState {
  fetchHistoryRequest: RequestSliceStateProperty<AverageHistoryItem[]>;

  addAverageRequest: RequestSliceStateProperty<AverageHistoryItem>;

  localHistory: AverageHistoryItem[];
}

const initialState: InitialState = {
  fetchHistoryRequest: makeRequestSliceStateProperty<AverageHistoryItem[]>(),
  addAverageRequest: makeRequestSliceStateProperty<AverageHistoryItem>(),
  localHistory: [],
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
    addToLocalHistory: (state, action: PayloadAction<AverageHistoryItem>) => {
      state.localHistory.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchHistoryThunk,
      'fetchHistoryRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.addAverageThunk,
      'addAverageRequest',
    );
  },
});
