import { Action } from 'redux';

import { Product, User } from '../../shared/domain';

export const PLACEHOLDER_A = 'PLACEHOLDER_A';
export interface PlaceholderAction extends Action<typeof PLACEHOLDER_A> {
  placeholder: null;
}
export const placeholderAction = (placeholder: null) => {
  return {
    type: PLACEHOLDER_A,
    placeholder
  };
};

export const SET_DASHBOARD_PRODUCTS_A = 'SET_DASHBOARD_PRODUCTS_A';
export interface SetDashboardProductsAction
  extends Action<typeof SET_DASHBOARD_PRODUCTS_A> {
  dashboardProducts: Product[] | null;
}
export const setDashboardProductsAction = (
  dashboardProducts: Product[] | null
) => {
  return {
    type: SET_DASHBOARD_PRODUCTS_A,
    dashboardProducts: dashboardProducts
  };
};

export const SET_PRODUCT_A = 'SET_PRODUCT_A';
export interface SetProductAction extends Action<typeof SET_PRODUCT_A> {
  product: Product | null;
}
export const setProductAction = (product: Product | null) => {
  return {
    type: SET_PRODUCT_A,
    product: product
  };
};

export const SET_CURRENT_USER_A = 'SET_CURRENT_USER_A';
export interface SetCurrentUserAction
  extends Action<typeof SET_CURRENT_USER_A> {
  user: User | null;
}
export const setCurrentUserAction = (user: User | null) => {
  return {
    type: SET_CURRENT_USER_A,
    user: user
  };
};

export type DataAction =
  | PlaceholderAction
  | SetDashboardProductsAction
  | SetProductAction
  | SetCurrentUserAction;

// TODO: Create data actions for SET_FAVORITES_A
