import React from 'react';

const person = (props) => {
    /* Vai dar um erro, "falso alarme". Pois o primeiro valor de Person, no App.js não
        tem o método criado do onChange sendo passado como referência (por isso, não
        conseguimos mudar o valor do primeiro campo, inclusive). Este erro, é apenas
        para lembrar que a propriedade "value" não poderá ser alterada! */
    return (
        <div>
        <p onClick={props.click}>I'm {props.name} and I have {props.age} years old!</p>
        <p>{props.children}</p>
        <input onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;