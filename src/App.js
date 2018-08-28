import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import FeedList from "./components/FeedList";
import AddFeedForm from "./components/AddFeedForm";
import ItemList from "./components/ItemList";

class App extends Component {
  state = {
    feeds: []
  };

  componentDidMount() {
    // implement data fetch here
    fetch("/subscriptions.json")
      .then(res => {
        return res.json();
      })
      .then(subs => {
        subs.forEach(feed => {
          fetch(`${feed._name}.json`)
            .then(res => {
              return res.json();
            })
            .then(feeddata => {
              Object.assign(feed, feeddata);
              this.setState({ feeds: [...this.state.feeds, feed] });
            });
        });
      });
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
