import {
  setErrorAction,
  setLoadingAction,
  setSuccessAction
} from '../display/display-actions';
import {
  DisplayErrorState,
  DisplayLoadingState,
  DisplaySuccessState
} from '../display/display-reducer-type';
import { ThunkDispatch } from '../store';

interface ThunkCallStructProps {
  dispatch: ThunkDispatch;
  loadingState?: keyof DisplayLoadingState;
  errorState?: keyof DisplayErrorState;
  successState?: keyof DisplaySuccessState;
  noAlert?: boolean;
  tryBlock: () => Promise<void>;
}

export const thunkCallStruct: (props: ThunkCallStructProps) => void = async ({
  dispatch,
  loadingState,
  errorState,
  successState,
  noAlert,
  tryBlock
}) => {
  if (loadingState && errorState) {
    dispatch(setLoadingAction(loadingState, true, errorState));
  }

  try {
    await tryBlock();

    if (successState) {
      dispatch(setSuccessAction(successState, true));
    }

    if (loadingState && errorState) {
      dispatch(setLoadingAction(loadingState, false, errorState));
    }
  } catch (e) {
    console.error(e);

    if (loadingState && errorState) {
      dispatch(setLoadingAction(loadingState, false, errorState));
    }

    if (errorState && e.errors?.length > 0 && e.errors[0].message) {
      if (!noAlert) {
        // TODO: call snackbar alert
      }

      dispatch(setErrorAction(errorState, e.errors[0].message));
    } else if (errorState && e.message) {
      if (!noAlert) {
        // TODO: call snackbar alert
      }

      dispatch(setErrorAction(errorState, e.message));
    }
  }
};
