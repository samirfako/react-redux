import React from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import ChangeBgColor from './components/ChangeBgColor';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <ChangeBgColor />
    </div>
  );
};

export default App;
