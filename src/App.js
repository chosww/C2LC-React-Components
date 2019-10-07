import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomizedBootstrapComp from './CustomizedBootstrapComp';
import Reakit from './Reakit';
import Carbon from './Carbon';
import Bootstrap from './Bootstrap';
import MaterialUi from './MaterialUi';

function App() {
  return (
    <div className="App">
      <p>this is working</p>
      <Bootstrap />
      <Reakit />
      <Carbon />
      <MaterialUi />
    </div>
  );
}

export default App;
