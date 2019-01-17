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

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Pedro Barata", age: 25},
        {name: "Test", age: 40}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button onClick={this.switchNameHandler}>Change name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
      </div>
    );
  }
}

export default App;
