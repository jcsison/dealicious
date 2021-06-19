import { RootState, ThunkDispatch } from '../store';
import { thunkCallStruct } from './thunk-utils';

export * from './favorite-thunks';
export * from './product-thunks';
export * from './user-thunks';

export const placeholderThunk = () => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'placeholderLoading',
    errorState: 'placeholderError',
    successState: 'placeholderSuccess',
    tryBlock: async () => {
      return;
    }
  });
};
