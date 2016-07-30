import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import ListContainer from './containers/ListContainer';

ReactDOM.render(
    <Provider store={store}>
        <ListContainer />
    </Provider>, 
    document.getElementById('root'));