import React from "react";

export default

class SearchBox extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search a name..."
        onChange={({ target: { value } }) =>
          this.props.onSearchChanged(value)
        }
      />
    );
  }
}