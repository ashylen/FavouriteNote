import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  LOGOUT,
} from 'actions';

const initialState = {
  // userID: '5ca8f00a097c3394e62f64ab',
  userID: '',
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case LOGOUT:
      return {
        userID: '',
        isLoginFailed: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
        isLoginFailed: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        userID: null,
        isLoginFailed: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
