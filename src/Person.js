import React from "react";

export default

class PeopleList extends React.Component {
  render() {
    return (
      <div>
        <span>{ this.props.first_name }</span>
        <span> - { this.props.email }</span>
      </div>
    );
  }
}