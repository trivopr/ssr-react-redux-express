import * as actionTypes from '../actions/actionTypes';


const AdminReducer = (state = [] , action) => {
    console.log(action.payload);
    switch(action.type) {
        case actionTypes.FETCH_ADMINS:
            return action.payload;

        default:
            return state;
    }
}

export default AdminReducer;