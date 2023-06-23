import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mediapp.db');

export const insertProfile = (userId, email) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO profiles (id, email, first_name, last_name, profile_image, created_at, logged_in) VALUES (?, ?, ?, ?, ?, ?, ?);',
        [userId, email, '', '', '', Date.now(), 1],
        (txObj, result) => {
          console.log('Profile Inserted');
          resolve(result);
        },
        (txObj, e) => {
          console.log('Profile Not inserted');
          reject(e);
        }
      );
    });
  });
  return promise;
}

export const getLoggedInProfile = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM profiles WHERE logged_in = 1;',
        [],
        (_, result) => {
          resolve(result);
        },
        (e) => {
          reject(e);
        }
      );
    });
  });
  return promise;
}

export const updateProfileColumn = (column, value, id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE profiles SET ${column} = ? WHERE id = ?;`,
        [value, id],
        (txObj, result) => {
          console.log('Profile Updated');
          resolve(result);
        },
        (txObj, e) => {
          console.log('Profile Not Updated');
          reject(e);
        }
      );
    });
  });
  return promise;
}

// export const fetchPlaces = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'SELECT * FROM profiles',
//         [],
//         (_, result) => {
//           resolve(result);
//         },
//         (e) => {
//           reject(e);
//         }
//       );
//     });
//   });
//   return promise;
// };