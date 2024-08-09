import {call, put, takeLatest,all} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL_AUTH } from '../config';
import { LOGIN_REQUEST,LOGOUT_REQUEST, } from './Constant';
import { logoutSuccess,  loginSuccess , LoginFailure} from './Actions';

function* loginSaga(action){
    try{
        console.log('kullanıcı adı şifre alındı', action);
        const response = yield call(axios.post, API_URL_AUTH, action.payload);
        console.log('API response:', response);
        yield call(AsyncStorage.setItem, 'userToken', response.data.token);
        console.log('Token saved to AsyncStorage:', response.data.token);
        yield put(loginSuccess(response.data));
        
    } catch (error) {
        console.log('Hata oluştu:', error); 
        yield put(LoginFailure(error.message));
    }
}

function* logoutSaga(){
    try{
        yield call(AsyncStorage.removeItem, 'userToken');
        yield put(logoutSuccess());
    }catch(error){
        console.log('Error during logout', error);
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN_REQUEST,loginSaga);
    yield takeLatest(LOGOUT_REQUEST,logoutSaga);
};