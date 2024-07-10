import React, { Component } from 'react';
import './App.css';

const GreetingFunction = ({ name, message }) => {
  return (
    <p>{name}, {message}</p>
  );
};

class GreetingClass extends Component {
  constructor(){
super()

  }
  render() {
    return (
      <p>{this.props.name}, {this.props.message}</p>
    );
  }
}

function App() {
  return (
    <div className="App">
      <GreetingFunction name="Ahmad" message="Welcome to our platform" />
      <GreetingClass name="Omar" message="glad to see you here" />
    </div>
  );
}

export default App;
