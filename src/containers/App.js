import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "sadasd1", name: "Pedro", age: 25 },
        { id: "asdfwe1", name: "Test", age: 30 }
      ],
      isShow: false,
      toggleClicked: 0,
      isAuthenticated: false
    };
    console.log("[App.js] Inside constructor()", props);
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE .js] Inside getDerivedStateFromProps()",
      nextProps,
      prevState
    );
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "[UPDATE App.js] Inside getSnapshotBeforeUpdate()"
    )
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }  */

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }

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
    this.setState((prevState, props) => {
      return {
        isShow: !togglePersons,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  removePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;

    if (this.state.isShow) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.removePerson}
          changed={this.nameChangedHander}
        />
      );
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ isShow: true });
          }}
        >
          click!
        </button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.isShow}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {persons}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App);
