import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
    <React.Fragment>
      <Wrapper>
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
