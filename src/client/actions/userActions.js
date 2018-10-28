import axios from 'axios';

import * as actionTypes from './actionTypes';


const fetchUserSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER,
        payload: data
    }
}

const fetchCurrentUserSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CURRENT_USER,
        payload: data
    }
}

const fetchAdminsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ADMINS,
        payload: data
    }
}

export const fetchUser = () => {
    return async (dispatch, getState, api) => {
        const result = await api.get('/users');
        dispatch(fetchUserSuccess(result.data));
    }
}

export const fetchCurrentUser = () => {
    return async (dispatch, getState, api) => {
        const result = await api.get('/current_user');
        dispatch(fetchCurrentUserSuccess(result.data));
    }
}

export const fetchAdmins = () => {
    return async (dispatch, getState, api) => {
        const result = await api.get('/admins');
        dispatch(fetchAdminsSuccess(result.data));
    }
}