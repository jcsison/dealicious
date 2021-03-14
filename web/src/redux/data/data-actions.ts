import { Action } from 'redux';

import { Product } from '../../shared/domain';

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

export type DataAction = PlaceholderAction | SetDashboardProductsAction;
