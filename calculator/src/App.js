import React, { Component } from 'react';
import BackgroundCircles from './components/BackgroundCircles';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BackgroundCircles />
        <Calculator />
      </div>
    );
  }
}

export default App;
