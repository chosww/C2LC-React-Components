import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomizedBootstrapComp from './CustomizedBootstrapComp';
import Reakit from './Reakit';
import Carbon from './Carbon';
import Bootstrap from './Bootstrap';
import MaterialUi from './MaterialUi';
import GrommetComp from './Grommet';

function App() {
  return (
    <div className="App">
      <p>this is working</p>
      <Bootstrap />
      <MaterialUi />
      <GrommetComp />
    </div>
  );
}

export default App;
