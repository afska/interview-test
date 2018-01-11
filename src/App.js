import React, { Component } from 'react';
import logo from './logo.svg';
import PeopleList from "./PeopleList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleList />
      </div>
    );
  }
}

export default App;
