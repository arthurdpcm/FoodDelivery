import React, { createContext, useContext, useState, useEffect } from 'react';
import UserType from '../types/UserType';
import data from "../../mock.json"


interface UserContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}

const UserContext = createContext<UserContextType | null>(null);


export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    
    const mockUser = data['users'].find((u: UserType) => u.id === 101);
    if (mockUser) {
      setUser(mockUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
