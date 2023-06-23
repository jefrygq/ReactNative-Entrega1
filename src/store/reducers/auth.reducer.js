import Profile from "../../models/Profile";
import { SIGN_UP } from "../actions/auth.action";

const initialState = {
  currentUserId: null,
  profiles: []
};

const AuthReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SIGN_UP:
      const profile = new Profile(action.userId, action.email);
      const newProfiles = [...state.profiles, profile];
      return {...state, currentUserId: action.userId, profiles: newProfiles};
  
    default:
      return state;
  }
};

export default AuthReducer;