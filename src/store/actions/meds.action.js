export const SELECTED_MED = 'SELECTED_MED';
export const FILTERED_MEDS = 'FILTERED_MEDS';

export const selectedMed = id => (
  {
    type: SELECTED_MED,
    productId: id
  }
);

export const filteredMeds = category => (
  {
    type: FILTERED_MEDS,
    categoryId: category
  }
);