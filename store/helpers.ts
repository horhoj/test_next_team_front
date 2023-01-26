import { AxiosError } from 'axios';
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import { ErrorPayload, RequestSliceStateProperty } from './types';

export const makeRequestSliceStateProperty = <T>(
  initialValues: Partial<RequestSliceStateProperty<T>> = {},
): RequestSliceStateProperty<T> => ({
  data: null,
  error: null,
  isLoading: false,
  ...initialValues,
});

export const makeRequestCaseToBuilder = <IS>(
  builder: ActionReducerMapBuilder<any>,
  asyncThunk: AsyncThunk<any, any, any>,
  requestPropertyName: keyof IS,
): void => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state[requestPropertyName].isLoading = true;
      state[requestPropertyName].error = null;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state[requestPropertyName].isLoading = false;
      state[requestPropertyName].data = action.payload;
    })
    .addCase(asyncThunk.rejected, (state, { error, payload }) => {
      state[requestPropertyName].isLoading = false;
      state[requestPropertyName].data = null;
      state[requestPropertyName].error = payload ?? error;
    });
};

export const requestExecutor = async (
  cb: (...args: unknown[]) => Promise<unknown>,
  rejectWithValue: (value: unknown) => unknown,
) => {
  try {
    return await cb();
  } catch (e) {
    const code = (e as AxiosError)?.response?.status;
    const responseBody = (e as AxiosError)?.response?.data;

    if (code && responseBody) {
      const errorPayload: ErrorPayload = {
        code,
        responseBody,
        isRequestError: true,
      };
      return rejectWithValue(errorPayload);
    }
    throw e;
  }
};
