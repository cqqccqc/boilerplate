import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderList from '../components/OrderList';

export default class ListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <OrderList />
            </div>
        );
    }
}
