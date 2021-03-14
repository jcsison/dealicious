import thunk, { ThunkDispatch as TD, ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import { useMemo } from 'react';

import { dataReducer, DataReduxState } from './data/data-reducer';
import { displayReducer } from './display/display-reducer';
import {
  DisplayErrorState,
  DisplayLoadingState,
  DisplayReduxState,
  DisplaySuccessState
} from './display/display-reducer-type';

export type RootState = ReturnType<typeof combinedReducers>;
export type ThunkDispatch = TD<RootState, void, Action>;
interface Store {
  DATA_REDUCER: DataReduxState;
  DISPLAY_REDUCER: DisplayReduxState;
}

let store = undefined;
const reducers = {
  DISPLAY_REDUCER: displayReducer,
  DATA_REDUCER: dataReducer
};
const combinedReducers = combineReducers(reducers);

const preloadStore = (
  preloadedState: Store = {
    DATA_REDUCER: {} as DataReduxState,
    DISPLAY_REDUCER: {
      displayLoading: {} as DisplayLoadingState,
      displayError: {} as DisplayErrorState,
      displaySuccess: {} as DisplaySuccessState
    } as DisplayReduxState
  },
  logging?: boolean
) => {
  const middlewares: ThunkMiddleware[] = [thunk];

  if (logging) {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
  }

  return createStore(
    combinedReducers,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export const initializeStore = (preloadedState: any, logging?: boolean) => {
  let _store = store ?? preloadStore(preloadedState, logging);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = preloadStore(
      {
        ...store.getState(),
        ...preloadedState
      },
      logging
    );

    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState, false), [
    initialState
  ]);

  return store;
}
