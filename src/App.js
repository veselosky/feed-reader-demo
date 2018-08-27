import React, { Component } from "react";
import "./App.css";
import FeedList from "./components/FeedList";
import AddFeedForm from "./components/AddFeedForm";
import ItemList from "./components/ItemList";

class App extends Component {
  state = {
    feeds: [],
    feedItems: {}
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A React RSS Reader Demo</h1>
        </header>
        <div className="feedList">
          <FeedList feeds={this.state.feeds} />
        </div>
        <div className="addFeedForm">
          <AddFeedForm />
        </div>
        <div className="itemList">
          <ItemList items={[]} />
        </div>
      </div>
    );
  }
}

export default App;
