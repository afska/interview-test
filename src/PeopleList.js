import React from "react";
import Person from "./Person";
import data from "./data";

export default

class PeopleList extends React.Component {
  render() {
    return (
      <div>
        {
          data.map(it =>
            <Person {...it} />
          )
        }
      </div>
    );
  }
}