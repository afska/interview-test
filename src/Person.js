import React from "react";

export default

class PeopleList extends React.Component {
  render() {
    return (
      <div>
        { this.props.first_name }
      </div>
    );
  }
}