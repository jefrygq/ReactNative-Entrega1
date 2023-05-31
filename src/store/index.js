import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import UserProfilesReducer from './reducers/userprofiles.reducer';
import MedsReducer from './reducers/meds.reducer';
// import RemindersReducer from './reducers/reminders.reducer';

// names of the global states
const RootReducer = combineReducers({
    profiles: UserProfilesReducer,
    meds: MedsReducer,
    // remiders: RemindersReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));