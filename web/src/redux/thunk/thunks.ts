import { Product } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { getHttp } from './api-utils';
import { setDashboardProductsAction } from '../data/data-actions';
import { thunkCallStruct } from './thunk-utils';

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

export const getProductsThunk = () => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'dashboardProductsLoading',
    errorState: 'dashboardProductsError',
    successState: 'dashboardProductsSuccess',
    tryBlock: async () => {
      const products: Product[] = await getHttp('/api/dummy/products');

      if (products) {
        dispatch(setDashboardProductsAction(products));
      }
    }
  });
};
