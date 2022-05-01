// import { createContext, useReducer, useEffect } from 'react';
// import { onAuthStateChangedListener, createUserFile } from '../utils/firebase/firebase';
// import { createAction } from '../utils/reducer/reducer';

// // storage context object, initialize it
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// // provider component, wrap around any components that need access to the stored
// // data (passed by the value attr)
// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, {});
//   const value = { currentUser };

//   // first mounted, listener will check the authentication state automatically
//   // when the listener is initialized (cb is executed first time);
//   // furture cb runs depends on the "auth" state changes
//   useEffect(() => {
//     // unsubscribe is the return value of onAuthStateChanged() given by firebase
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserFile(user); // will check is user exists
//       }
//       dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     });
//     // run whatever returned when the component is unmounted
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

/**
 * useEffect and useReducer can cause the components to re-render each time there is a call
 * to the update functions.
 *
 * But, it's not guaranteed that a re-rener won't occur when you do not mutate the state when
 * using useReducer(), so put the code that has any potential side effects in useEffect hook.
 */
