export interface DisplayLoadingState {
  placeholderLoading?: boolean;
  dashboardProductsLoading?: boolean;
  productLoading?: boolean;
  userLoading?: boolean;
  newUserLoading?: boolean;
  userFavoritesLoading?: boolean;
  addFavoriteLoading?: boolean;
  removeFavoriteLoading?: boolean;
}

export interface DisplayErrorState {
  placeholderError?: string | null;
  dashboardProductsError?: string | null;
  productError?: string | null;
  userError?: string | null;
  newUserError?: string | null;
  userFavoritesError?: string | null;
  addFavoriteError?: string | null;
  removeFavoriteError?: string | null;
}

export interface DisplaySuccessState {
  placeholderSuccess?: boolean;
  dashboardProductsSuccess?: boolean;
  productSuccess?: boolean;
  userSuccess?: boolean;
  newUserSuccess?: boolean;
  userFavoritesSuccess?: boolean;
  addFavoriteSuccess?: boolean;
  removeFavoriteSuccess?: boolean;
}

export interface DisplayReduxState {
  displayLoading: DisplayLoadingState;
  displayError: DisplayErrorState;
  displaySuccess: DisplaySuccessState;
}
