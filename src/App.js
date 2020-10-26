import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@impact-x/react-button';
import Input from '@impact-x/react-input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
        <br />
        <button>I am a button!</button>
        <Button>I am an impact x button!</Button>
        <br />
        <label htmlFor="input-1">All input fields must have a label</label>
        <p id="helptext-input-1">Any additional help text can be added here but it is not a substitute for a label</p>
        <Input id="input-auth-username" control-id="input-1" data-testid="default-input-example" placeholder="Placeholder text" ariadescribedby="helptext-input-1"/>
      </header>
    </div>
  );
}

export default App;
