import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <Person name="Pedro" age="25"/>
        <Person name="Teste" age="30">My hobbies: Racing </Person>
      </div>
    );
  }
}

export default App;
