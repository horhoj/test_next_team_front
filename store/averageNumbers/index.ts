import * as selectors from './selectors';
import * as thunks from './thunks';
import { actions, reducer } from './slice';

export const averageNumbersSlice = {
  actions,
  reducer,
  selectors,
  thunks,
} as const;
