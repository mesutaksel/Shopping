import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL_AUTH } from '../config';
import { LOGIN_REQUEST, loginSuccess, LoginFailure} from './Actions';

function* loginSaga(action){
    try{
        const response = yield call (axios.post, API_URL_AUTH, action.payload);
        yield AsyncStorage.setItem('userToken', response.data.token);
        yield put (loginSuccess(response.data));
    }catch (error){
        yield put (LoginFailure(error.message));
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN_REQUEST,loginSaga);
};