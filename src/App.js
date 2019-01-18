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

  switchNameHandler = (myNewName) => {
    this.setState({
      persons: [
        {name: myNewName, age: 25},
        {name: "Test", age: 40}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        {/* Arrow Functions here could be inefficient!!! */}
        <button onClick={() => this.switchNameHandler('Pedrooo!')}>Change name!</button>
        <Person click={this.switchNameHandler.bind(this, 'Pedroooww!')} 
        name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
      </div>
    );
  }
}

export default App;
