import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { types } from "../../types/types";
import { provider } from "../../firebaseConfig";

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user.uid);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {});
  };
};

export const logout = () => ({
  type: types.LOGOUT,
});
