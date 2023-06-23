// import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase('mediapp.db');

// export const insertProfile = (userId, token, email) => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'INSERT INTO meds (id, token, email, first_name, last_name, profile_image, created_at, logged_in) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
//         [userId, token, email, '', '', '', Date.now(), 1],
//         (txObj, result) => {
//           console.log('Profile Inserted');
//           resolve(result);
//         },
//         (txObj, e) => {
//           console.log('Profile Not inserted');
//           reject(e);
//         }
//       );
//     });
//   });
//   return promise;
// }

// // export const fetchPlaces = () => {
// //   const promise = new Promise((resolve, reject) => {
// //     db.transaction((tx) => {
// //       tx.executeSql(
// //         'SELECT * FROM meds',
// //         [],
// //         (txObj, result) => {
// //           resolve(result);
// //         },
// //         (txObj, e) => {
// //           reject(e);
// //         }
// //       );
// //     });
// //   });
// //   return promise;
// // };