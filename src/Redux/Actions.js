import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

} from './Constant'


export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload:credentials,
})

export const loginSuccess = (user) => ({
    type:LOGIN_SUCCESS,
    payload: user,
})

export const LoginFailure = (error) => ({
    type:LOGIN_FAILURE,
    payload:error,
})

export const logoutRequest = () => ({
    type:LOGOUT_REQUEST,
})

export const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS,
})

export const registerRequest = (credentials) => ({
    type:REGISTER_REQUEST,
    payload:credentials,
})

export const registerSuccess = (user) => ({
    type:REGISTER_SUCCESS,
    payload:user,
})

export const registerFailure = (error) => ({
    type:REGISTER_FAILURE,
    payload:error,
})