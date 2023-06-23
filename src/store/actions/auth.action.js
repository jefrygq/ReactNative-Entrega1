import { AUTH_SIGNUP_URL } from "../../constants/firebase";
import { insertProfile } from "../../database/profiles";

export const SIGN_UP = 'SIGN_UP';

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
      console.log(result);

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