import React, { useContext } from 'react';
import { AlertContext } from './App';

const Main = ({ toggle }) => {
  return (
    <div>
      <h1>privet v primere s context</h1>
      <button className="btn_success" onClick={toggle}>
        pokazat alert
      </button>
    </div>
  );
};

export default Main;
