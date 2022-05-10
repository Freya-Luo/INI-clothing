import { USER_ACTION_TYPES } from "./user-types";
import { createAction, Action, ActionPayload, matcher } from "../../utils/reducer/reducer";
import { UserData } from "../../utils/firebase/firebase";

// create action type for set current user action
type SetCurrentUser = ActionPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export const setCurrentUser = matcher(
  (user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user),
);
