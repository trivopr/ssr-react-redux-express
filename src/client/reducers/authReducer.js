import * as actionTypes from '../actions/actionTypes';


const AuthReducer = (state = null , action) => {
    switch(action.type) {
        case actionTypes.FETCH_CURRENT_USER:
            return action.payload || false;

        default:
            return state;
    }
}

export default AuthReducer;