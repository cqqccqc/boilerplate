import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import store from './store';
import ListContainer from './list/containers/ListContainer';

ReactDOM.render(
    <Provider store={store}>
        <ListContainer />
    </Provider>,
    document.getElementById('root'));