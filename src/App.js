import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sadasd1", name: "Pedro", age: 25 },
      { id: "asdfwe1", name: "Test", age: 30 }
    ],
    isShow: false
  };

  nameChangedHander = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const togglePersons = this.state.isShow;
    this.setState({ isShow: !togglePersons });
  };

  removePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      border: "1px solid red",
      font: "inherit",
      padding: "10px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.isShow) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.removePerson(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHander(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi!</h1>
        {/* Arrow Functions here could be inefficient!!! */}
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
