import React from 'react';
import logo from './Araf-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Araf and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/araf-rahman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
