export const SELECTED_MED = 'SELECTED_MED';
export const ADD_MED = 'ADD_MED';
export const FILTERED_MEDS = 'FILTERED_MEDS';

export const selectedMed = id => (
  {
    type: SELECTED_MED,
    medId: id
  }
);

export const addMed = data => (
  {
    type: ADD_MED,
    data: data
  }
);

export const filteredMeds = category => (
  {
    type: FILTERED_MEDS,
    categoryId: category
  }
);