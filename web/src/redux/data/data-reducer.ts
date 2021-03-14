import { DataAction, PlaceholderAction, PLACEHOLDER_A } from './data-actions';

interface DataReduxState {
  placeholder: null;
}

const defaultDataState = {
  placeholder: null
};

export const dataReducer = (
  state: DataReduxState = defaultDataState,
  action: DataAction
): DataReduxState => {
  switch (action.type) {
    case PLACEHOLDER_A:
      return {
        ...state,
        placeholder: (action as PlaceholderAction).placeholder
      };
    default:
      return state;
  }
};
