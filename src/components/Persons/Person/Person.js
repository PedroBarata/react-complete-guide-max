import React, { Component } from "react";
import classes from "./Person.css";
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
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
          ref={this.inputElement}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number, 
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
