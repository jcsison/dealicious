import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkDispatch as TD } from 'redux-thunk';

import { dataReducer } from './data/data-reducer';
import { displayReducer } from './display/display-reducer';

const reducers = {
  DISPLAY_STATE_REDUCER: displayReducer,
  DATA_REDUCER: dataReducer
};
const middlewares = [thunk];
const combinedReducers = combineReducers(reducers);

export type RootState = ReturnType<typeof combinedReducers>;
export type ThunkDispatch = TD<RootState, void, Action>;

export const store = createStore(
  combinedReducers,
  applyMiddleware(...middlewares)
);
