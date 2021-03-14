export interface DisplayLoadingState {
  placeholderLoading: boolean;
}

export interface DisplayErrorState {
  placeholderError: string | null;
}

export interface DisplaySuccessState {
  placeholderSuccess: boolean;
}

export interface DisplayReduxState {
  displayLoading: DisplayLoadingState;
  displayError: DisplayErrorState;
  displaySuccess: DisplaySuccessState;
}
