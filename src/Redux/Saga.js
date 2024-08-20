import {call, put, takeLatest,all} from 'redux-saga/effects';
import axios from 'axios';
import { API_URL_AUTH } from '../config';
import { API_URL_REGISTER } from '../config';
import { API_URL_PRODUCTS } from '../config';
import { LOGIN_REQUEST,LOGOUT_REQUEST, REGISTER_REQUEST,FETCH_PRODUCTS_REQUEST } from './Constant';
import { logoutSuccess,  loginSuccess , LoginFailure, registerSuccess, registerFailure,fetchProductsSuccess,fetchProductsFailure} from './Actions';

function* loginSaga(action){
    try{
        const response = yield call(axios.post, API_URL_AUTH, action.payload);
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(LoginFailure(error.message));
    }
}

function* registerSaga(action){
    try{
        const response = yield call (axios.post, API_URL_REGISTER, action.payload);
        yield put(registerSuccess(response.data));
    
    }catch(error) {
        yield put(registerFailure(error.message));
    }
}

function* logoutSaga(){
    try{
        yield put(logoutSuccess());
    }catch(error){
    }
}

function* fetchproductsSaga(){
    try {
        const response = yield call (axios.get, API_URL_PRODUCTS);
        yield put (fetchProductsSuccess(response.data));
    } catch (error) {
        yield put (fetchProductsFailure(error.message));
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN_REQUEST,loginSaga);
    yield takeLatest(LOGOUT_REQUEST,logoutSaga);
    yield takeLatest(REGISTER_REQUEST,registerSaga);
    yield takeLatest(FETCH_PRODUCTS_REQUEST,fetchproductsSaga);
};