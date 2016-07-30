import { Map } from 'immutable';

const initialState = Map({});

let list = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }    
}

export default list;