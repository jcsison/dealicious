import {
  DataAction,
  PLACEHOLDER_A,
  PlaceholderAction,
  SET_DASHBOARD_PRODUCTS_A,
  SetDashboardProductsAction
} from './data-actions';
import { Product } from '../../shared/domain';

export interface DataReduxState {
  placeholder?: void;
  dashboardProducts?: Product[] | null;
}

const defaultDataState: DataReduxState = {};

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
    case SET_DASHBOARD_PRODUCTS_A:
      return {
        ...state,
        dashboardProducts: (action as SetDashboardProductsAction)
          .dashboardProducts
      };
    default:
      return state;
  }
};
