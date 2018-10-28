import { combineReducers } from 'redux';
import users from './userReducer';
import auth from './authReducer';
import admins from './adminsReducer';


const rootReducers = combineReducers ({
    users,
    auth,
    admins
});

export default rootReducers;
