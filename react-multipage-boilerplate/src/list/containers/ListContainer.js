import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import ListLayout from '../components/ListLayout';

class ListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, list } = this.props;
        return (
            <div>
                <ListLayout {...list.toJS()} />
            </div>
        );
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ListContainer);
