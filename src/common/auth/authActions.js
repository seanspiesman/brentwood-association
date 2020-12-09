import { SIGN_IN_USER, SIGN_OUT_USER } from "./authContants";
import firebase from "../config/firebase";

export function signInUser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function signOutUser() {
  console.log("here1");
  return {
    type: SIGN_OUT_USER,
  };
}
