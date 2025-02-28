import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { User } from '../types/common';
import { fetchCurrentUser } from '../api/mock';

interface AppContextProps {
  userData: User | null;
  setUserData: (data: User) => void;
}

export const AppContext = createContext<AppContextProps>({
  userData: null,
  setUserData: () => {}
});

export const useApp = () => {
  return useContext(AppContext);
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const user = fetchCurrentUser();
    setUserData(user);
  }, []);

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
