import { Map, fromJS, List, merge } from 'immutable';

import listActionType from '../constants/listActionType';
import Order from '../models/Order';

const initialState = fromJS({
    orderList: [
        new Order('20160731', 'Shanghai Hotel', 'Standard room', '13333333333', 'Jack', ''),
        new Order('20160730', 'Beigjing Hotel', 'Standard room', '14444444444', 'Anne', ''),
        new Order('20160729', 'Nanjing Hotel', 'Standard room', '15555555555', 'Smith', ''),
        new Order('20160728', 'Tianjing Hotel', 'Standard room', '13333222222', 'William', ''),
        new Order('20160727', 'Tokyo Hotel', 'Standard room', '13244445555', 'Tony', ''),
        new Order('20160726', 'New York Hotel', 'Standard room', '13422223555', 'Micheal', ''),

        new Order('20160725', 'Shanghai Hotel', 'Standard room', '13333333333', 'Jack', ''),
        new Order('20160724', 'Beigjing Hotel', 'Standard room', '14444444444', 'Anne', ''),
        new Order('20160723', 'Nanjing Hotel', 'Standard room', '15555555555', 'Smith', ''),
        new Order('20160722', 'Tianjing Hotel', 'Standard room', '13333222222', 'William', ''),
        new Order('20160721', 'Tokyo Hotel', 'Standard room', '13244445555', 'Tony', ''),
        new Order('20160720', 'New York Hotel', 'Standard room', '13422223555', 'Micheal', ''),
    ]
});

let list = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default list;
