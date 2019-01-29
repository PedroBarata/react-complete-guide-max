import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let btnClass = "";
  const objectClassesCss = [];

  if(props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 1) {
    objectClassesCss.push(classes.red); //classes = ['red'];
  }
  if (props.personsLength <= 0) {
    objectClassesCss.push(classes.bold); //classes = ['red', 'bold'];
  }

  
  return (
    <div className={classes.Cockpit}>
      <h1>Hi!</h1>
      <p className={objectClassesCss.join(" ")}>Test with dynamic classes!</p>
      {/* Arrow Functions here could be inefficient!!! */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons!
      </button>
    </div>
  );
};

export default cockpit;
