import {createContext, useContext,useState } from "react";

const userContext = createContext();

export const ContextProvider = ({ children }) => {

    const [search, setSearch] = useState(true);
   
  return (
    <userContext.Provider
      value={{
        search, setSearch,
      }}
    >
        {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(userContext); 
};


