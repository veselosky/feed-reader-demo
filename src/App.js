import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FeedParser from "feedparser";

import "./App.css";
import FeedList from "./components/FeedList";
import AddFeedForm from "./components/AddFeedForm";
import ItemList from "./components/ItemList";

class App extends Component {
  state = {
    feeds: [],
    feedItems: {},
    subscribedUrls: [
      "https://vince.veselosky.me/feed",
      "http://www.thecreativepenn.com/feed/"
    ]
  };

  componentDidMount() {
    // implement data fetch here
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">A React RSS Reader Demo</h1>
        </header>
        <Grid container spacing={16}>
          <Grid item md={3} className="feedList">
            <FeedList feeds={this.state.feeds} />
            <div className="addFeedForm">
              <AddFeedForm />
            </div>
          </Grid>

          <Grid item md={9} className="itemList">
            <ItemList items={[]} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
