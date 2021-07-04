import { Favorite, FavoritedProduct, UUID } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { deleteHttp, getHttp, postHttp } from './api-utils';
import { setUserFavoritesAction } from '../data/data-actions';
import { thunkCallStruct } from './thunk-utils';

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

export const removeFavoriteThunk = (productId: UUID) => async (
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
        await deleteHttp(`/api/favorite/${currentUser.id}/${productId}`);

        const favoritedProducts = getState().DATA_REDUCER.userFavorites;

        // Update store with new products
        if (favoritedProducts) {
          dispatch(
            setUserFavoritesAction(
              favoritedProducts.filter(
                (favoritedProduct) => favoritedProduct.productId !== productId
              )
            )
          );
        }
      }
    }
  });
};
