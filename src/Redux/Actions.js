import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
} from './Constant'

export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload:credentials,
});

export const loginSuccess = (user) => ({
    type:LOGIN_SUCCESS,
    payload: user,
});

export const LoginFailure = (error) => ({
    type:LOGIN_FAILURE,
    payload:error,
});

export const logoutRequest = () => ({
    type:LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS,
});