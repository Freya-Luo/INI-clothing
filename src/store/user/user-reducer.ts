import { USER_ACTION_TYPES } from "./user-types";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase";
import { setCurrentUser } from "./user-action";
import { User } from "firebase/auth";

export type UserState = {
  readonly currentUser: UserData | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction) => {
  if (setCurrentUser.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  return state;
};
