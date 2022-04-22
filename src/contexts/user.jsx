import { createContext, useState } from 'react';

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
