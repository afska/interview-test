import React from "react";
import Person from "./Person";

export default

class PeopleList extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <div>
        {
          people.map((it, i) =>
            <Person key={i} {...it} />
          )
        }
      </div>
    );
  }
}