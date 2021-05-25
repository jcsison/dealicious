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
import { deleteHttp, getHttp, postHttp } from './api-utils';
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
      const products: Product[] = await getHttp('/api/product');

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
      const product: Product = await getHttp(`/api/product/${productId}`);

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
      const user: User = await postHttp('/api/user/login', {
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
      const newUser: User = await postHttp('/api/user/signup', {
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
          `/api/favorite/${userId ?? currentUser.id}`
        );

        if (products) {
          dispatch(setUserFavoritesAction(products));
        }
      }
    }
  });
};

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
        const favoritedProduct: FavoritedProduct = await postHttp(
          '/api/favorite',
          {
            productId: productId,
            userId: currentUser.id
          } as Favorite
        );

        const favoritedProducts = getState().DATA_REDUCER.userFavorites;
        favoritedProducts.concat(favoritedProduct);

        // Update store with new products
        if (favoritedProduct) {
          dispatch(setUserFavoritesAction(favoritedProducts));
        }
      }
    }
  });
};

export const removeFavoriteThunk = (favoriteId: UUID) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'removeFavoriteLoading',
    errorState: 'removeFavoriteError',
    successState: 'removeFavoriteSuccess',
    tryBlock: async () => {
      const currentUser = getState().DATA_REDUCER.currentUser;

      // If a user is logged in
      if (currentUser) {
        // Create a delete request to update dummy API with new favorite
        await deleteHttp(`/api/favorite/${favoriteId}`);

        const favoritedProducts = getState().DATA_REDUCER.userFavorites;

        // Update store with new products
        dispatch(
          setUserFavoritesAction(
            favoritedProducts.filter(
              (favoritedProduct) => favoritedProduct.id !== favoriteId
            )
          )
        );
      }
    }
  });
};
