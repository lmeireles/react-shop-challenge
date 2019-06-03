import { SIGN_IN, SIGN_OUT } from "./action-types";

const INITIAL_STATE = {
  logged: false,
  loading: false,
  user: null,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        loading: false,
        logged: true,
        user: {
          name: "Usuário",
          access: "1"
        },
        error: null
      };
    }
    case SIGN_OUT: {
      return {
        ...INITIAL_STATE
      };
    }
    default:
      return state;
  }
}
