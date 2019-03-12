import React, { Component } from 'react';
import './App.css';

class App extends Component {

  sum(num1, num2){
    return num1 + num2;
  }

  render() {
    return (
      <div className="App">
        Init app
      </div>
    );
  }
}

export default App;
