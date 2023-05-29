import { CURRENT_PROFILE } from "../actions/profiles.action";

const initialState = {
  profiles: [],
  current: null,
};

const ProductReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);

  switch (action.type) {
    case CURRENT_PROFILE:
      return {
        ...state,
        current: state.profiles.find(
          profile => profile.id === action.profileId
        ),
      };
      break;
  
    default:
      return state;
      break;
  }
}

export default ProductReducer;