import firebase from "../config/firebase";

export async function socialLogin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    // if (result.additionalUserInfo.isNewUser) {
    //   await setUserProfileData(result.user);
    // }
  } catch (error) {
    console.log(error);
  }
}

export function signOutFirebase() {
  return firebase.auth().signOut();
}
