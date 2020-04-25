import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'normalize.css';
import Menu from './Components/Menu/Menu';
import Catalog from './Components/Catalog/Catalog';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu />
      <div className="content">
        <div className="main__container container">
          <Catalog />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
