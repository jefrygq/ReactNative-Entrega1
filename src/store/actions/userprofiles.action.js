export const ADD_PROFILE = 'ADD_PROFILE';
export const CURRENT_PROFILE = 'CURRENT_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const addProfile = (userId, email) => (
  {
    type: ADD_PROFILE,
    userId: userId,
    email: email,
  }
);

export const currenProfile = id => (
  {
    type: CURRENT_PROFILE,
    profileId: id
  }
);

export const updateProfile = (id, data) => (
  {
    type: UPDATE_PROFILE,
    profileId: id,
    data: data
  }
);