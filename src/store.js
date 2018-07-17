import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer';

const middleware = [thunk];
const initialState = {
    todos: [],
};

const store = createStore(todoReducer, initialState, applyMiddleware(...middleware));

export default store;
