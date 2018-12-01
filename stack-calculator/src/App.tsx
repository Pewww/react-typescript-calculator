import * as React from 'react';
import BackgroundCircles from './components/BackgroundCircles';
import Calculator from './components/Calculator';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BackgroundCircles />
        <Calculator />
      </div>
    );
  }
}
