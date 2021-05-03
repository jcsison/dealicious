import { Product, User, UserLogin, UserSignup } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { getHttp, postHttp } from './api-utils';
import {
  setDashboardProductsAction,
  setProductAction
} from '../data/data-actions';
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
      const products: Product[] = await getHttp('/api/dummy/product');

      /*
      const user: User = await postHttp('/api/dummy/user/login', {
        email: 'test@test.com',
        password: ''
      } as UserLogin);
      const newUser: User = await postHttp('/api/dummy/user/signup', {
        first_name: 'Test2',
        last_name: 'User',
        email: 'test2@test.com',
        password: '',
        date_of_birth: new Date(1990, 1, 1)
      } as UserSignup);
      const user2: User = await postHttp('/api/dummy/user/login', {
        email: 'test2@test.com',
        password: ''
      } as UserLogin);
      console.log(user);
      console.log(newUser);
      console.log(user2);
      */

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
      const product: Product = await getHttp(`/api/dummy/product/${productId}`);

      if (product) {
        dispatch(setProductAction(product));
      }
    }
  });
};
