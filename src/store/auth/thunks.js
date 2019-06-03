import { signIn, signOut } from "./actions";

export const login = user => async (dispatch, getState) => {
  dispatch(signIn());
  return true;
};

export const logout = user => async (dispatch, getState) => {
  dispatch(signOut());
  return true;
};
