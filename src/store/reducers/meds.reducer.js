import { FILTERED_MEDS, SELECTED_MED, ADD_MED } from "../actions/meds.action";
import { MEDS } from '../../data/meds';

console.log('meds file');
console.log(MEDS);

const initialState = {
  meds: MEDS,
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
    case ADD_MED:
      let id = state.meds.length;
      let payload = {...action.data, id: id};

      return {
        ...state,
        meds: [...state.meds, payload]
      };
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