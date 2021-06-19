import { Product } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { getHttp } from './api-utils';
import {
  setDashboardProductsAction,
  setProductAction
} from '../data/data-actions';
import { thunkCallStruct } from './thunk-utils';

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
      const products: Product[] = await getHttp('/api/product', {
        mock: true
      });

      if (products) {
        dispatch(setDashboardProductsAction(products));
      }
    }
  });
};

export const getProductThunk = (productId: string) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'productLoading',
    errorState: 'productError',
    successState: 'productSuccess',
    tryBlock: async () => {
      const product: Product = await getHttp(`/api/product/${productId}`, {
        mock: true
      });

      if (product) {
        dispatch(setProductAction(product));
      }
    }
  });
};
