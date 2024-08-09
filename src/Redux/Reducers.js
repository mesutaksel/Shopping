import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS} from './Constant';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return{...state,loading: true, error:null};
        case LOGIN_SUCCESS:
            return{...state,loading: false, user: action.payload}
        case LOGIN_FAILURE:
            return{...state,loading: false, error: action.payload}
        case LOGOUT_SUCCESS:
            return{...state, user:null };
        default:
            return state;
    }
};

export default authReducer;
