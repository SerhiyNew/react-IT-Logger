import React, { useEffect, Fragment } from 'react';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // initialize of materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        {' '}
        <AddBtn></AddBtn>
        <AddLogModal></AddLogModal>
        <Logs></Logs>
      </div>
    </Fragment>
  );
}

export default App;
