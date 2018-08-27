import React, { Component } from "react";

class AddFeedForm extends Component {
  state = {
    enteredUrl: "",
    feedUrls: []
  };

  handleChange = e => {
    this.setState({ enteredUrl: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ enteredUrl: "" });
    alert(`Submitted ${this.state.enteredUrl} (Adding feeds not implemented)`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.enteredUrl}
        />
        <button>Go</button>
      </form>
    );
  }
}

export default AddFeedForm;
