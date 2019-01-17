import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Pedro", age: 25},
      {name: "Test", age: 30}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button>Change name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
      </div>
    );
  }
}

export default App;
