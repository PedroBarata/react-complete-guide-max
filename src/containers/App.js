import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";

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
    let persons = null;

    let btnClass = "";

    if (this.state.isShow) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.removePerson(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHander(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const objectClassesCss = [];

    if (this.state.persons.length <= 1) {
      objectClassesCss.push(classes.red); //classes = ['red'];
    }
    if (this.state.persons.length <= 0) {
      objectClassesCss.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
      <div className={classes.App}>
        <h1>Hi!</h1>
        <p className={objectClassesCss.join(" ")}>Test with dynamic classes!</p>
        {/* Arrow Functions here could be inefficient!!! */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
