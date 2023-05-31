import { FILTERED_MEDS, SELECTED_MED, ADD_MED, GET_MEDS } from "../actions/meds.action";

const initialState = {
  meds: [],
  filteredMeds: [],
  selected: null,
};

const MedsReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);

  switch (action.type) {
    case SELECTED_MED:
      return {
        ...state,
        current: state.meds.find(
          med => med.id === action.medId
        ),
      };
    case GET_MEDS:
      return {...state, meds: action.meds};
    case FILTERED_MEDS:
      // console.log('changing meds');
      return {
        ...state,
        filteredUserProfiles: state.meds.filter(
          med => med.categoryId === action.categoryId
        )
      };
  
    default:
      return state;
  }
}

export default MedsReducer;