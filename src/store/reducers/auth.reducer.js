import Profile from "../../models/Profile";
import { SIGN_UP } from "../actions/auth.action";

const initialState = {
  currentToken: null,
  currentUserId: null,
  profiles: []
};

const AuthReducer = (state = initialState, action) => {
  const profile = new Profile(action.userId, action.token, action.email);
  const newProfiles = [...state.profiles, profile];
  
  switch (action.type) {
    case SIGN_UP:
      return {...state, token: action.token, userId: action.userId, profiles: newProfiles};
  
    default:
      return state;
  }
};

export default AuthReducer;