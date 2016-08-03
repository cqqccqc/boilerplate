import { Map } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';
const loggerMiddleware = createLogger();

let state = Map({});
// Invoking CONSTRUCT to build the initial state.
state = rootReducer(state, {
    name: 'CONSTRUCT'
});
const store = createStore(
    rootReducer,
    state,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;
