import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
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

    if (this.state.isShow) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.removePerson}
          changed={this.nameChangedHander} />
    }

   

    return (
      <div className={classes.App}>
        <Cockpit 
        personsLength={this.state.persons.length}
        showPersons={this.state.isShow}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
