import {
  DisplayAction,
  SET_GENERIC_ERROR_A,
  SET_GENERIC_LOADING_A,
  SET_GENERIC_SUCCESS_A,
  SetErrorAction,
  SetLoadingAction,
  SetSuccessAction
} from './display-actions';
import { DisplayReduxState } from './display-reducer-type';

const defaultDisplayState = {
  displayLoading: {},
  displayError: {},
  displaySuccess: {}
};

export const displayReducer = (
  state: DisplayReduxState = defaultDisplayState,
  action: DisplayAction
) => {
  switch (action.type) {
    case SET_GENERIC_ERROR_A:
      const errorResult = { ...state };
      const errorAction = action as SetErrorAction;
      errorResult.displayError[errorAction.reduxField] = errorAction.errorMsg;
      return errorResult;
    case SET_GENERIC_LOADING_A:
      const loadingResult = { ...state };
      const loadingAction = action as SetLoadingAction;
      loadingResult.displayLoading[
        loadingAction.reduxField
      ] = loadingAction.loading ? loadingAction.loading : false;
      if (loadingAction.errorFieldToNull) {
        loadingResult.displayError[loadingAction.errorFieldToNull] = null;
      }
      return loadingResult;
    case SET_GENERIC_SUCCESS_A:
      const successResult = { ...state };
      const successAction = action as SetSuccessAction;
      successResult.displaySuccess[
        successAction.reduxField
      ] = successAction.success ? successAction.success : false;
      return successResult;
    default:
      return state;
  }
};
