import uuid from 'uuid';
import _ from 'lodash';

import * as ListActionType from '../constants/listActionType';
import Order from '../models/Order';

function fetchOrderRequest(pageIndex) {
    return {
        type: ListActionType.FETCH_ORDER_REQUEST,
        payload: {
            pageIndex,
            loading: true
        }
    };
}
function fetchOrderResponse(pageIndex, json) {
    return {
        type: ListActionType.FETCH_ORDER_RESPONSE,
        payload: {
            orderList: json.orderList,
            total: json.total,
            pageIndex,
            loading: false
        }
    };
}
export function fetchOrder(pageIndex) {
    return (dispatch, getState) => {
        dispatch(fetchOrderRequest(pageIndex));

        let json = {
            total: 100,

            orderList: _.shuffle([
                new Order(uuid.v1(), 'Shanghai Hotel', 'Standard room', '13333333333', 'Jack', ''),
                new Order(uuid.v1(), 'Beigjing Hotel', 'Standard room', '14444444444', 'Anne', ''),
                new Order(uuid.v1(), 'Nanjing Hotel', 'Standard room', '15555555555', 'Smith', ''),
                new Order(uuid.v1(), 'Tianjing Hotel', 'Standard room', '13333222222', 'William', ''),
                new Order(uuid.v1(), 'Tokyo Hotel', 'Standard room', '13244445555', 'Tony', ''),
                new Order(uuid.v1(), 'New York Hotel', 'Standard room', '13422223555', 'Micheal', ''),
                new Order(uuid.v1(), 'Shanghai Hotel', 'Standard room', '13333333333', 'Jack', ''),
                new Order(uuid.v1(), 'Beigjing Hotel', 'Standard room', '14444444444', 'Anne', ''),
                new Order(uuid.v1(), 'Nanjing Hotel', 'Standard room', '15555555555', 'Smith', ''),
                new Order(uuid.v1(), 'Tianjing Hotel', 'Standard room', '13333222222', 'William', '')
            ])
        };
        window.setTimeout(function () {
            dispatch(fetchOrderResponse(pageIndex, json));
        }, 1000);
    };
}
