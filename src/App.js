import React, { Fragment, useState } from 'react';

import Menu from './components/Menu';
import Search from './components/Search';
import Header from './components/Header';


function App() {

  const [search, setSearch]= useState(false);

  return (
    <Fragment>
      <Header setSearch={setSearch}/>
      {search ?<Menu/>
              :<Search setSearch={setSearch}/>}      
    </Fragment>
  );
}

export default App;
