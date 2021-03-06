import { fireAuth } from "./config";

// login
export type FireLoginType = {
  email: string;
  password: string;
};
export const login = ({ email, password }: FireLoginType) => {
  return fireAuth.signInWithEmailAndPassword(email, password);
};

// signup
export type FireSignupType = {
  email: string;
  password: string;
};
export const signup = ({ email, password }: FireSignupType) => {
  return fireAuth.createUserWithEmailAndPassword(email, password);
};

//signout
export const signout = () => {
  fireAuth.signOut();
};

// forgetPass
export const forgetPass = (email: string) => {
  fireAuth.sendPasswordResetEmail(email);
};
