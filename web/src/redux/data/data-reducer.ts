import {
  DataAction,
  PLACEHOLDER_A,
  PlaceholderAction,
  SET_DASHBOARD_PRODUCTS_A,
  SetDashboardProductsAction,
  SetProductAction,
  SET_PRODUCT_A,
  SET_CURRENT_USER_A,
  SetCurrentUserAction,
  SET_USER_FAVORITES_A,
  SetUserFavoritesAction
} from './data-actions';
import { FavoritedProduct, Product, User } from '../../shared/domain';

export interface DataReduxState {
  placeholder?: void;
  dashboardProducts?: Product[] | null;
  product?: Product | null;
  currentUser?: User | null;
  userFavorites?: FavoritedProduct[] | null;
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
    case SET_USER_FAVORITES_A:
      return {
        ...state,
        userFavorites: (action as SetUserFavoritesAction).userFavorites
      };
    case SET_PRODUCT_A:
      return {
        ...state,
        product: (action as SetProductAction).product
      };
    case SET_CURRENT_USER_A:
      return {
        ...state,
        currentUser: (action as SetCurrentUserAction).user
      };
    default:
      return state;
  }
};
