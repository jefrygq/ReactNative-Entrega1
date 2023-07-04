import Profile from "../../models/Profile";
import { ADD_PROFILE, CURRENT_PROFILE } from "../actions/userprofiles.action";

const initialState = {
  profiles: [],
  current: null,
};

const ProductReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);

  switch (action.type) {
    case ADD_PROFILE:
      const profile = new Profile(action.userId, action.email);
      const newProfiles = [...state.profiles, profile];
      return {...state, current: profile, profiles: newProfiles};
    case CURRENT_PROFILE:
      console.log(state);
      return {
        ...state,
        current: state.profiles.find(
          profile => profile.id == action.profileId
        ),
      };
  
    default:
      return state;
  }
}

export default ProductReducer;