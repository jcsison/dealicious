import { Product, User, UserLogin, UserSignup } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { getHttp, postHttp } from './api-utils';
import {
  setCurrentUserAction,
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

export const getUserThunk = (email: string, password: string) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'userLoading',
    errorState: 'userError',
    successState: 'userSuccess',
    tryBlock: async () => {
      const user: User = await postHttp('/api/dummy/user/login', {
        email: email,
        password: password
      } as UserLogin);

      if (user) {
        dispatch(setCurrentUserAction(user));
      }
    }
  });
};

export const getNewUserThunk = (
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: Date,
  password: string
) => async (dispatch: ThunkDispatch, getState: () => RootState) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'newUserLoading',
    errorState: 'newUserError',
    successState: 'newUserSuccess',
    tryBlock: async () => {
      const newUser: User = await postHttp('/api/dummy/user/signup', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        date_of_birth: dateOfBirth
      } as UserSignup);
    }
  });
};

// TODO: Create getFavoritesThunk which passes in user ID in order to get array of products from store
// TODO: Add in template functions for add/remove favorites thunk
