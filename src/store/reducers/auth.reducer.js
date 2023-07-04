import Profile from "../../models/Profile";
import { LOGIN, LOGOUT, SIGN_UP, LOGIN_ERROR } from "../actions/auth.action";

const initialState = {
  currentUserId: null,
  loginError: null,
};

const AuthReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SIGN_UP:
      return {...state, currentUserId: action.userId};
    case LOGIN:
      const newState = {...state, currentUserId: action.userId, loginError: null};
      console.log(newState);
      return newState;
    case LOGOUT:
      return {...state, currentUserId: null};
    case LOGIN_ERROR:
      return {...state, loginError: action.error};
  
    default:
      return state;
  }
};

export default AuthReducer;