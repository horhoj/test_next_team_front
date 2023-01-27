import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/store/averageNumbers/types';
import { requestExecutor } from '@/store/helpers';
import { api } from '@/api/index';
import { actions } from '@/store/averageNumbers/slice';

export const fetchHistoryThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchHistoryThunk`,
  async (_, { rejectWithValue }) => {
    return requestExecutor(async () => {
      return api.averageNumbers.fetchHistory();
    }, rejectWithValue);
  },
);

interface AddAverageThunkPayload {
  value: number;
  successCb: () => void;
}

export const addAverageThunk = createAsyncThunk(
  `${SLICE_NAME}/addAverageThunk`,
  async (
    { value, successCb }: AddAverageThunkPayload,
    { rejectWithValue, dispatch },
  ) => {
    return requestExecutor(async () => {
      const result = await api.averageNumbers.addAverage(value);
      dispatch(actions.addToLocalHistory(result));
      successCb();
      return result;
    }, rejectWithValue);
  },
);
