import { AUTH_LOGIN_URL, AUTH_SIGNUP_URL } from "../../constants/firebase";
import { insertProfile, updateProfileColumn } from "../../database/profiles";

export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch (AUTH_SIGNUP_URL,
      {
        method: 'POST',
        headers: {
          'Content-TYPE': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      
      const result = await response.json();
      console.log('SignUp request result:');
      console.log(result);

      if(result.error) {
        dispatch({
          type: LOGIN_ERROR,
          error: result.error
        });
      }

      // save place to db
      const dbResult = await insertProfile(result.localId, email);
      console.log(dbResult);

      dispatch({
        type: SIGN_UP,
        userId: result.localId,
        email: email
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch (AUTH_LOGIN_URL,
      {
        method: 'POST',
        headers: {
          'Content-TYPE': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      
      const result = await response.json();
      console.log('Login request result:');
      console.log(result);

      if(result.error) {
        dispatch({
          type: LOGIN_ERROR,
          error: result.error
        });
      }

      // save place to db
      const dbResult = await updateProfileColumn('logged_in', 1, result.localId);
      console.log(dbResult);

      dispatch({
        type: LOGIN,
        userId: result.localId
      });
    } catch (error) {
      console.log(error);
    }
  }

};

export const logout = (userId) => {
  return async dispatch => {
    try {
      // const response = await fetch (AUTH_SIGNUP_URL,
      // {
      //   method: 'POST',
      //   headers: {
      //     'Content-TYPE': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //     returnSecureToken: true
      //   })
      // });
      
      // const result = await response.json();
      // console.log(result);

      // save place to db
      const dbResult = await updateProfileColumn('logged_in', 0, userId);
      console.log(dbResult);

      dispatch({
        type: LOGOUT,
        userId: userId
      });
    } catch (error) {
      console.log(error);
    }
  }
}