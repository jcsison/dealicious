import { Action } from 'redux';

import {
  DisplayErrorState,
  DisplayLoadingState,
  DisplaySuccessState
} from './display-reducer-type';

export const SET_GENERIC_ERROR_A = 'SET_GENERIC_ERROR_A';
export interface SetErrorAction extends Action<typeof SET_GENERIC_ERROR_A> {
  reduxField: keyof DisplayErrorState;
  errorMsg: string | null;
}
export const setErrorAction = (
  reduxField: keyof DisplayErrorState,
  errorMsg: string | null
) => {
  return {
    type: SET_GENERIC_ERROR_A,
    reduxField,
    errorMsg
  };
};

export const SET_GENERIC_LOADING_A = 'SET_GENERIC_LOADING_A';
export interface SetLoadingAction extends Action<typeof SET_GENERIC_LOADING_A> {
  reduxField: keyof DisplayLoadingState;
  loading: boolean;
  errorFieldToNull: keyof DisplayErrorState;
}
export const setLoadingAction = (
  reduxField: keyof DisplayLoadingState,
  loading: boolean,
  errorFieldToNull: keyof DisplayErrorState
) => {
  return {
    type: SET_GENERIC_LOADING_A,
    reduxField,
    loading,
    errorFieldToNull
  };
};

export const SET_GENERIC_SUCCESS_A = 'SET_GENERIC_SUCCESS_A';
export interface SetSuccessAction extends Action<typeof SET_GENERIC_SUCCESS_A> {
  reduxField: keyof DisplaySuccessState;
  success: boolean;
}
export const setSuccessAction = (
  reduxField: keyof DisplaySuccessState,
  success: boolean
) => {
  return {
    type: SET_GENERIC_SUCCESS_A,
    reduxField,
    success
  };
};

export type DisplayAction =
  | SetLoadingAction
  | SetErrorAction
  | SetSuccessAction;
