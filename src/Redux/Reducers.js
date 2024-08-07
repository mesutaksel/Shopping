import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './Actions';

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
            return{...state,loading: true, user: action.payload}
        case LOGIN_FAILURE:
            return{...state,loading: true, error: action.payload}
        default:
            return state;
    }
};

export default authReducer;
