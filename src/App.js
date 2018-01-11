import React, { Component } from 'react';
import SearchBox from "./SearchBox";
import PeopleList from "./PeopleList";
import data from "./data";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { searchValue: "" };
  }

  render() {
    return (
      <div className="App">
        <SearchBox
          onSearchChanged={(searchValue) => {
            this.setState({ ...this.state, searchValue });
          }}
        />

        <PeopleList people={this.filteredPeople} />
      </div>
    );
  }

  get filteredPeople() {
    return data.filter((it) => {
      return it.first_name.toLowerCase().includes(this.state.searchValue);
    });
  }
}

export default App;
