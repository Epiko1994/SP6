import React from 'react';
import './App.css';
import person from './file2';
import {males, females} from './file2';

function App() {

    const {firstName, email} = person;

    const [person1, person2] = males;
    const [person3, person4] = females;

    let people = [person1, person2, person3, person4];
    
    console.log(...[people]);


    return (
      <div className="App">
        
        <p> Fornavn: {firstName} Email: {email} </p>
        
      </div>
    );
  }

  export default App;