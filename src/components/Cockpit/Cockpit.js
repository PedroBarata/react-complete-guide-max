import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import { setTimeout } from "timers";
import AuthContext from "../../context/auth-context";
// import Aux from "../../hoc/Aux";

const cockpit = props => {

  const toggleBtnRef = useRef(null);
  
  const authContext = useContext(AuthContext)

  let btnClass = classes.Button;
  const objectClassesCss = [];

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 1) {
    objectClassesCss.push(classes.red); //classes = ['red'];
  }
  if (props.persons.length <= 0) {
    objectClassesCss.push(classes.bold); //classes = ['red', 'bold'];
  }

  useEffect(() => {
    console.log("[Cockpit.js] useEffect()");
    /* setTimeout(() => {
      alert("Chamou!");
    },1000) */
    console.log(authContext);
    toggleBtnRef.current.click();
  }, []);

  useEffect(() => {
    return(() => {
      console.log("[Cockpit.js] removing useEffect()");
    });
  });


  useEffect(() => {
    setTimeout(() => {
      alert("Chamou ao alterar uma pessoa!");
    },1000)
  }, [props.persons]);

  return (
    /* A partir do React 16.2, 
    pode-se passar uma tag vazia, 
    que faz o mesmo trabalho do Aux */
    <>
      <h1>Hi!</h1>
      <p className={objectClassesCss.join(" ")}>Test with dynamic classes!</p>
      {/* Arrow Functions here could be inefficient!!! */}
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons!
      </button>
      <button onClick={authContext.login}>Log in!</button>
    </>
  );
};

export default React.memo(cockpit);
