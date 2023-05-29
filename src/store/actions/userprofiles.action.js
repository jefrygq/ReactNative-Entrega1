export const CURRENT_PROFILE = 'CURRENT_PROFILES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const currenProfile = id => (
  {
    type: CURRENT_PROFILE,
    profileId: id
  }
);

export const updateProfile = id => (
  {
    type: UPDATE_PROFILE,
    profileId: id,
    data: {}
  }
);