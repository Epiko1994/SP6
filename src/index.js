import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import ListApp1 from './ListApp1';
import ListApp2 from './ListApp2';

let app = <App/>

const DontUseMeForReal = () => {
  return (
      <div className="App" onClick={handleSelect}>
       <a href="/"  className="x" id="app1">Upper Case</a> &nbsp;
       <a href="/"  className="x" id="app2">People</a> &nbsp;
       <a href="/"  className="x" id="app3">Counter and other</a> &nbsp;
       <a href="/"  className="x" id="app4">Time</a> &nbsp;
       <a href="/"  className="x" id="ListApp1">ListApp1</a> &nbsp;
       <a href="/"  className="x" id="ListApp2">ListApp2</a> &nbsp;
       {/* Add as many as you have exercises, but remember className="x" */}
       {app}
      </div>
  )
}

function handleSelect(event) {
  event.preventDefault();
  if(event.target.className!=="x"){
    return
  }  
  const id = event.target.id;
  switch (id) {
      case "app1": app = <App />; break;
      case "app2": app = <App2 />; break;
      case "app3": app = <App3 />; break;
      case "app4": app = <App4 />; break; 
      case "ListApp1": app = <ListApp1 />; break;
      case "ListApp2": app = <ListApp2 />; break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
