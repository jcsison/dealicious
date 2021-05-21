import {
  Favorite,
  FavoritedProduct,
  Product,
  User,
  UserLogin,
  UserSignup,
  UUID
} from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { getHttp, postHttp } from './api-utils';
import {
  setCurrentUserAction,
  setDashboardProductsAction,
  setProductAction,
  setUserFavoritesAction
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

export const getFavoritesThunk = (userId?: UUID) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'userFavoritesLoading',
    errorState: 'userFavoritesError',
    successState: 'userFavoritesSuccess',
    tryBlock: async () => {
      const currentUser = getState().DATA_REDUCER.currentUser;

      if (currentUser) {
        const products: FavoritedProduct[] = await getHttp(
          `/api/dummy/favorites/${userId ?? currentUser.id}`
        );

        if (products) {
          dispatch(setUserFavoritesAction(products));
        }
      }
    }
  });
};

// TODO: Add in template functions for remove favorites thunk. Can I use one thunk to add/remove? (Pass in a bool to specify)
export const addFavoriteThunk = (productId: UUID) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'addFavoriteLoading',
    errorState: 'addFavoriteError',
    successState: 'addFavoriteSuccess',
    tryBlock: async () => {
      const currentUser = getState().DATA_REDUCER.currentUser;

      // If a user is logged in
      if (currentUser) {
        // Create a post request to update dummy API with new favorite
        const favorite: Favorite = await postHttp('/api/dummy/favorites', {
          productId: productId,
          userId: currentUser.id
        } as Favorite);

        // Get updated list of favorited products using currently logged in user ID
        const products: FavoritedProduct[] = await getHttp(
          `/api/dummy/favorites/${currentUser.id}`
        );

        // Update store with new products
        if (products) {
          dispatch(setUserFavoritesAction(products));
        }
      }
    }
  });
};
