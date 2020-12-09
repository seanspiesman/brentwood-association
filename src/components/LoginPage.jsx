import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../common/auth/authActions";
import {
  signOutFirebase,
  socialLogin,
} from "../common/firestore/firebaseService";

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  console.log(authenticated);

  function handleSocialLogin() {
    socialLogin();
  }

  function handleSignOut() {
    signOutFirebase();
  }

  return (
    <div className="container">
      <div className="elements text-center">
        <h1>Login with Gmail</h1>
        {!authenticated ? (
          <button
            onClick={() => handleSocialLogin()}
            type="button"
            className="btn btn-primary"
            aria-label="Close"
          >
            Login with Google
          </button>
        ) : (
          <button
            onClick={() => handleSignOut()}
            type="button"
            className="btn btn-primary"
            aria-label="Close"
          >
            Logout of Google{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
