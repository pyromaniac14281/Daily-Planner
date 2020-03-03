import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
