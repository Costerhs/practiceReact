import Alert from './Alert';
import './App.css';
import Main from './Main';
import React from 'react';
import AlertProvider from './AlertProvider';

const App = () => {
  return (
    <AlertProvider>
      <div className="container">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
};

export default App;
