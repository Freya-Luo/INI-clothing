import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserFile } from '../utils/firebase/firebase';

// storage context object, initialize it
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider component, wrap around any components that need access to the stored
// data (passed by the value attr)
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // first mounted, listener will check the authentication state automatically
  // when the listener is initialized (cb is executed first time);
  // furture cb runs depends on the "auth" state changes
  useEffect(() => {
    // unsubscribe is the return value of onAuthStateChanged() given by firebase
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFile(user); // will check is user exists
      }
      setCurrentUser(user);
    });
    // run whatever returned when the component is unmounted
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
