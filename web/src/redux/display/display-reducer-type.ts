export interface DisplayLoadingState {
  placeholderLoading?: boolean;
  dashboardProductsLoading?: boolean;
  productLoading?: boolean;
  userLoading?: boolean;
  newUserLoading?: boolean;
  userFavoritesLoading?: boolean;
}

export interface DisplayErrorState {
  placeholderError?: string | null;
  dashboardProductsError?: string | null;
  productError?: string | null;
  userError?: string | null;
  newUserError?: string | null;
  userFavoritesError?: string | null;
}

export interface DisplaySuccessState {
  placeholderSuccess?: boolean;
  dashboardProductsSuccess?: boolean;
  productSuccess?: boolean;
  userSuccess?: boolean;
  newUserSuccess?: boolean;
  userFavoritesSuccess?: boolean;
}

export interface DisplayReduxState {
  displayLoading: DisplayLoadingState;
  displayError: DisplayErrorState;
  displaySuccess: DisplaySuccessState;
}
