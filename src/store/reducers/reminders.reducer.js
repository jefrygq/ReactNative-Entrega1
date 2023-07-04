import { SELECTED_REMINDER, GET_REMINDERS } from "../actions/reminders.action";

const initialState = {
  reminders: [],
  selected: null,
};

const RemindersReducer = (state = initialState, action) => {
  console.log('action');
  console.log(action);

  switch (action.type) {
    case SELECTED_REMINDER:
      return {
        ...state,
        current: state.reminders.find(
          reminder => reminder.id === action.reminderId
        ),
      };
    case GET_REMINDERS:
      return {...state, reminders: action.reminders};
  
    default:
      return state;
  }
}

export default RemindersReducer;