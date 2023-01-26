import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface RequestSliceStateProperty<T = unknown> {
  data: T | null;
  error: unknown | null;
  isLoading: boolean;
}

export interface ErrorPayload {
  isRequestError: boolean;
  code: number;
  responseBody: unknown;
}
