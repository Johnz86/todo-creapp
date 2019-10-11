import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import {History} from 'history';
import todosReducer from '../features/todos/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  todos: todosReducer,
});

export default createRootReducer;