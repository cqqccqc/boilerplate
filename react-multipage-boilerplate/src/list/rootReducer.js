// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import list from './reducers/listReducer';

const rootReducer = combineReducers({
    list
});

export default rootReducer;
