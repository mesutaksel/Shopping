import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import authReducer from './Reducers';
import rootSaga from './Saga';

const sagaMiddleWare = createSagaMiddleWare();

const store =createStore(authReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;

    