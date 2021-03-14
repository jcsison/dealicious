export interface DisplayLoadingState {
  placeholderLoading?: boolean;
  dashboardProductsLoading?: boolean;
}

export interface DisplayErrorState {
  placeholderError?: string | null;
  dashboardProductsError?: string | null;
}

export interface DisplaySuccessState {
  placeholderSuccess?: boolean;
  dashboardProductsSuccess?: boolean;
}

export interface DisplayReduxState {
  displayLoading: DisplayLoadingState;
  displayError: DisplayErrorState;
  displaySuccess: DisplaySuccessState;
}
