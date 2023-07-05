import {API_URL} from '../../constants/firebase';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

export const SELECTED_REMINDER = 'SELECTED_REMINDER';
export const CREATE_REMINDERS = 'CREATE_REMINDERS';
export const REGENERATE_REMINDERS = 'REGENERATE_REMINDERS';
export const ADD_REMINDER = 'ADD_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const GET_REMINDERS = 'GET_REMINDERS';

export const selectedReminder = id => (
  {
    type: SELECTED_REMINDER,
    reminderId: id
  }
);

export const createReminders = data => {
  return async dispatch => {
    try {
      let reminders = [];

      const startDate = dayjs(data.med.startsOn);
      const endDate = dayjs(data.med.endsOn);
      
      let nextReminderDate = startDate;
      while (nextReminderDate.isBefore(endDate)) {
        let reminder = {
          medId: data.med.id,
          name: data.med.name,
          presentation: data.med.presentation,
          dose: data.med.dose,
          imageFront: data.med.imageFront,
          imageBack: data.med.imageBack,
          imageMed: data.med.imageMed,
          status: 'not_taken',
          date: nextReminderDate.valueOf(),
          userId: data.userId,
        };

        reminders.push(reminder);
        nextReminderDate = nextReminderDate.add(data.med.frequencyAmount, data.med.frequencyUnit);
      }
      console.log('Reminders:');
      console.log(reminders);

      reminders.forEach(reminder => {
        dispatch(addReminder({
          reminder: reminder,
          medId: reminder.medId,
          userId: reminder.userId
        }));
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const regenerateReminders = data => {
  return async dispatch => {
    try {
      // delete existing reminders for user/med
      const result = await deleteReminders(data);
      console.log('Delete reminders ajax result:');
      console.log(result);

      // create new reminders for user/med
      let reminders = [];

      const startDate = dayjs(data.med.startsOn);
      const endDate = dayjs(data.med.endsOn);
      
      let nextReminderDate = startDate;
      while (nextReminderDate.isBefore(endDate)) {
        let reminder = {
          medId: data.med.id,
          name: data.med.name,
          presentation: data.med.presentation,
          dose: data.med.dose,
          imageFront: data.med.imageFront,
          imageBack: data.med.imageBack,
          imageMed: data.med.imageMed,
          status: 'not_taken',
          date: nextReminderDate.valueOf(),
          userId: data.userId,
        };

        reminders.push(reminder);
        nextReminderDate = nextReminderDate.add(data.med.frequencyAmount, data.med.frequencyUnit);
      }
      console.log('Regenerated reminders:');
      console.log(reminders);

      reminders.forEach(reminder => {
        dispatch(addReminder({
          reminder: reminder,
          medId: reminder.medId,
          userId: reminder.userId
        }));
      });
    } catch (error) {
      console.log(error);
    }
  }
};


export const addReminder = data => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_URL}/reminders/${data.userId}/${data.medId}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.reminder)
      });

      const result = await response.json();
      console.log('add reminder ajax result:');
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
      const response = await fetch(`${API_URL}/reminders/${data.userId}/${data.medId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.reminder)
      });

      const result = await response.json();
      console.log('update reminder ajax result:');
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

// export const deleteReminder = data => {
//   return async dispatch => {
//     try {
//       const response = await fetch(`${API_URL}/reminders/${data.userId}/${data.id}.json`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });

//       const result = await response.json();
//       console.log('delete ajax result:');
//       console.log(result);

//       dispatch({
//         type: DELETE_REMINDER,
//         reminderId: data.id
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

export const getReminders = data => {
  return async dispatch => {
    try {
      const response = await fetch (`${API_URL}/reminders/${data.userId}.json`,
      {
        method: 'GET',
        headers: {
          'Content-TYPE': 'application/json'
        }
      });
      
      const result = await response.json();
      // console.log('retrieved reminders:');
      // console.log(result);

      let flatReminders = [];
      if(result != null) {
        // remove top medId keys
        let reminders = Object.keys(result).map(key => result[key]);
        // console.log('reminders');
        // console.log(reminders);

        // include key/id for each reminder into the body
        reminders.forEach(medReminders => {
            const flatArray = Object.keys(medReminders).map(key => ({
                ...medReminders[key],
                id: key,
              }));
            
            flatReminders = [...flatReminders, ...flatArray];
        });
      }

      console.log('flat reminders');
      console.log(flatReminders);

      dispatch({ type: GET_REMINDERS, reminders: flatReminders });
    } catch (error) {
      console.log(error);
    }
  }
};

export async function deleteReminders(data) {
  console.log('Deleting reminders for user: ' + data.userId+' medId: ' + data.med.id);

  const response = await fetch(`${API_URL}/reminders/${data.userId}/${data.med.id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const result = await response.json();
  return result;
}
