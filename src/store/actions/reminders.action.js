import {API_URL} from '../../constants/firebase';

export const SELECTED_REMINDER = 'SELECTED_REMINDER';
export const ADD_REMINDER = 'ADD_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const GET_REMINDERS = 'GET_REMINDERS';
export const FILTERED_REMINDERS = 'FILTERED_REMINDERS';

export const selectedReminder = id => (
  {
    type: SELECTED_REMINDER,
    reminderId: id
  }
);

export const addReminder = data => {
  return async dispatch => {
    try {
      data.imageFront = saveImageToDevice(data.imageFront);
      data.imageBack = saveImageToDevice(data.imageBack);
      data.imageReminder = saveImageToDevice(data.imageReminder);

      const response = await fetch(`${API_URL}/reminders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log('add ajax result:');
      console.log(result);

      dispatch({
        type: ADD_REMINDER,
        reminderId: result.name
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const updateReminder = data => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/reminders/${data.key}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.reminder)
      });

      const result = await response.json();
      console.log('update ajax result:');
      console.log(result);

      dispatch({
        type: UPDATE_REMINDER,
        reminderId: result.name
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const deleteReminder = data => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/reminders/${data.key}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const result = await response.json();
      console.log('delete ajax result:');
      console.log(result);

      if(result.error) {
        dispatch({
          type: LOGIN_ERROR,
          error: result.error
        });

        return;
      }

      dispatch({
        type: DELETE_REMINDER,
        reminderId: data.key
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getReminders = data => {
  return async dispatch => {
    try {
      const response = await fetch (`${API_URL}/reminders.json`,
      {
        method: 'GET',
        headers: {
          'Content-TYPE': 'application/json'
        }
      });
      
      const result = await response.json();
      console.log('retrieved reminders:')
      console.log(result);

      const reminders = Object.keys(result).map(key => ({
        ...result[key],
        id: key
      }));
      console.log(reminders);

      dispatch({ type: GET_REMINDERS, reminders: reminders });
    } catch (error) {
      console.log(error);
    }
  }
};

export const filteredReminders = category => (
  {
    type: FILTERED_REMINDERS,
    categoryId: category
  }
);

