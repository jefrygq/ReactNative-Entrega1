export const CURRENT_PROFILE = 'CURRENT_PROFILES';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';

export const currenProfile = id => (
  {
    type: CURRENT_PROFILE,
    profileId: id
  }
);