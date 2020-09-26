import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

function App() {
  return (
    <Wrapper>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Wrapper>
  );
}

export default App;
