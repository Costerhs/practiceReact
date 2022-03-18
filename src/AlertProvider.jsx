import React, { useState, useContext } from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};
const AlertProvider = ({ children }) => {
  const [lot, setLot] = useState(false);
  const toggle = () => {
    return setLot((el) => (el = !el));
  };
  return <AlertContext.Provider value={lot}>{children}</AlertContext.Provider>;
};

export default AlertProvider;
