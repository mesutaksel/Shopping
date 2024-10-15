import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
  SAVE_CART_FAILURE,
  SAVE_CART_SUCCESS,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
} from './Constant';

const initialState = {
  user: null,
  loading: false,
  error: null,
  products: [],
  cartItems: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_CART_REQUEST:
      return {...state, loading: true, error: null};

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {...state, loading: false, user: action.payload};

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case FETCH_PRODUCTS_FAILURE:
      case FETCH_CART_FAILURE:
    case SAVE_CART_FAILURE:
      return {...state, loading: false, error: action.payload};

    case LOGOUT_SUCCESS:
      return {...state, user: null};

    case FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products: action.payload};

    case ADD_TO_CARD: // tekrar bak
    return {
        ...state,
        cartItems: [...state.cartItems, { productId: action.payload, quantity: 1 }],
        products: state.products.map(product =>
          product.id === action.payload ? {...product, inCard: true} : product,
        ),
      };
    case REMOVE_FROM_CARD: // tekrar bak
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? {...product, inCard: false} : product,
        ),
      };

      case SAVE_CART_REQUEST:
        return {
          ...state,
          loading: true,  
        };
  
      case SAVE_CART_SUCCESS:
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
        };
  
      case FETCH_CART_SUCCESS:
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
        };

    default:
      return state;
  }
};

export default authReducer;
