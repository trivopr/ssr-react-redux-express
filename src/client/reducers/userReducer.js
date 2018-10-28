import * as actionTypes from '../actions/actionTypes';


const UserReducer = (state = [] , action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER:
            return action.payload;

        default:
            return state;
    }
}

export default UserReducer;