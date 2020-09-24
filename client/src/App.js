import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

function App() {
  return (
    <>
    <React.Fragment>
      <Wrapper>
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Wrapper>
    </React.Fragment>
    </>
  );
}

export default App;
