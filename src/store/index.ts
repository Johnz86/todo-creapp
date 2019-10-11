import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';

import { composeEnhancers } from './utils';
import rootEpic from './root-epic';
import services from '../services';
import createRootReducer from './root-reducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

export const history = createBrowserHistory()

// configure middlewares
const middlewares = [epicMiddleware, routerMiddleware(history)];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(createRootReducer(history), initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
