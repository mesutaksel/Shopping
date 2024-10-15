import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    ADD_TO_CARD,
    REMOVE_FROM_CARD,


    SAVE_CART_REQUEST,
    SAVE_CART_SUCCESS,
    SAVE_CART_FAILURE,

    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,

} from './Constant'

 // buralar çok önemli ona göre davran 

 
export const saveCartRequest = (cartData) => ({
    type: SAVE_CART_REQUEST,
    payload:cartData,
});

export const saveCartSuccess = () => ({
    type: SAVE_CART_SUCCESS,
});

export const saveCartFailure = (error) => ({
    type: SAVE_CART_FAILURE,
    payload: error,
}); 

export const fetchCartRequest = (userId) => ({
    type: FETCH_CART_REQUEST,
    payload:{userId},
});

export const fetchCartSuccess = (cartItems) => ({
    type: FETCH_CART_SUCCESS,
    payload: cartItems,
});

export const fetchCartFailure = (error) => ({
    type: FETCH_CART_FAILURE,
    payload: error,
});

export const addToCard = (productId) => ({
    type:ADD_TO_CARD,
    payload:productId,
});

export const removeFromCard = (productId) => ({
    type:REMOVE_FROM_CARD,
    payload:productId,
});



export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});



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




export const registerRequest = (credentials) => ({
    type:REGISTER_REQUEST,
    payload:credentials,
});

export const registerSuccess = (user) => ({
    type:REGISTER_SUCCESS,
    payload:user,
});

export const registerFailure = (error) => ({
    type:REGISTER_FAILURE,
    payload:error,
});