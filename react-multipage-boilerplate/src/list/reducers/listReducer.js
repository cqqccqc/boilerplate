import { Map, fromJS, List, merge } from 'immutable';

import * as ListActionType from '../constants/listActionType';

const initialState = fromJS({
    orderList: [],
    total: 0,
    pageIndex: 1,
    loading: false
});

let list = (state = initialState, action) => {
    switch (action.type) {
        case ListActionType.FETCH_ORDER_REQUEST:
            return state.set('loading', action.payload.loading);
        case ListActionType.FETCH_ORDER_RESPONSE:
        console.log(action.payload);
            return state.set('orderList', action.payload.orderList)
                .set('total', action.payload.total).set('pageIndex', action.payload.pageIndex)
                .set('loading', action.payload.loading);
        default:
            return state;
    }
};

export default list;
