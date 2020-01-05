import React from 'react';
import './App.css';
import upper from "./file1";
import {text1, text2, text3} from "./file1";

function App() {
  return (
    <div className="App">
      
      <p> {upper("I should be upper case")} </p>
      <p> {text1} </p>
      <p> {text2} </p>
      <p> {text3} </p>

    </div>
  );
}

export default App;
