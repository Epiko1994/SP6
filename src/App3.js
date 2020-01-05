import React, {useState, useEffect, Component} from 'react';
import {names} from './file2';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  const person = props.person;
  const {firstName, lastName, gender, email, phone} = person; 
  return (
    <p> {firstName}, {lastName}, {email}  </p>
  )
}

class CounterClass extends Component {
  constructor(props){
    super();
    this.state = {count: props.startnumber};
  }
  countUp = () => {
    this.setState({count: this.state.count + 1})
  }
  countDown = () => {
    this.setState({count: this.state.count - 1})
  }
  render(){
    return (
      <div>
        Count: {this.state.count}<br/>
        <button onClick={this.countUp}>Click to count up</button>
        <button onClick={this.countDown}>Click to count down</button>
      </div>
    )
  }
}
  
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]}/>
      <WelcomePerson person={names[1]}/>
      <WelcomePerson person={names[2]}/>
      <CounterClass startnumber = {0} />
    
    </div>
  );
}

export default App;