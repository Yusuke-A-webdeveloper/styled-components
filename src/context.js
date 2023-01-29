import React, { useState, useContext } from 'react';
import { serviceList } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // eslint-disable-next-line
  const [menu, setMenu] = useState(serviceList);

  const changeTitle = (page) => {
    return (document.title = page);
  };

  return (
    <AppContext.Provider value={{ menu, changeTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
