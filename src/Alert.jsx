import React, { useContext } from 'react';
import { useAlert } from './AlertProvider';

const Alert = () => {
  const alert = useAlert();

  if (!alert) return null;
  return <div className="alert">this is very very importtant mess</div>;
};

export default Alert;
