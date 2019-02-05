import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log("[Person.js] I'm about to be removed!");
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I have {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={input => (this.inputElement = input)}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

export default withClass(Person, classes.Person);
