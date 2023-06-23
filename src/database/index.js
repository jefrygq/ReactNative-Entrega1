import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mediapp.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS profiles (
          id TEXT PRIMARY KEY NOT NULL,
          email TEXT NOT NULL,
          first_name TEXT,
          last_name TEXT,
          profile_image TEXT,
          created_at INT,
          logged_in INT
        );`,
        [],
        () => {
          console.log('Table profiles created');
          resolve();
        },
        (e) => {
          console.log('Table profiles not created');
          reject(e);
        }
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS meds (
          id TEXT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          presentation TEXT,
          dose TEXT NOT NULL,
          frequency_amount INT NOT NULL,
          frequency_unit TEXT NOT NULL,
          duration_amount INT,
          duration_unit TEXT,
          profile_id TEXT NOT NULL
        );`,
        [],
        (sqlTxn, result) => {
          console.log('Table meds created');
          console.log(result);
          resolve();
        },
        (txObj, e) => {
          console.log('Table meds not created');
          console.log(e);
          reject(e);
        }
      );
    });
  });
  
  return promise;
}