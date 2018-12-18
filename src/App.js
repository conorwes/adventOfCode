import React, { Component } from 'react';
import Calendar from "./components/Calendar";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
