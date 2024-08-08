export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


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
})

