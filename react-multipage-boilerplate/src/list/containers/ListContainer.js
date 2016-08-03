import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ListActionCreators from '../actions/listAction';
// import { createSelector } from 'reselect';

import ListLayout from '../components/ListLayout';

class ListContainer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props);
        const { dispatch, list } = this.props;
        let boundActionCreators = bindActionCreators(ListActionCreators, dispatch);
        return (
            <div>
                <ListLayout {...list }
                            {...boundActionCreators} />
            </div>
        );
    }
}

const mapStateToProps = state => state.toJS();
export default connect(mapStateToProps)(ListContainer);
