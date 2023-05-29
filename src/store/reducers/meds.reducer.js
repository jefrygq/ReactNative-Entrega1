import { FILTERED_MEDS, SELECTED_MED } from "../actions/meds.action";
import MEDS from '../../data/meds';

const initialState = {
  meds: MEDS,
  filteredMeds: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
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
      break;
    case FILTERED_MEDS:
      // console.log('changing meds');
      return {
        ...state,
        filteredUserProfiles: state.meds.filter(
          med => med.categoryId === action.categoryId
        )
      };
      break;
  
    default:
      return state;
      break;
  }
}

export default ProductReducer;