import React, { Component } from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import FeedList from "./components/FeedList";
import Feed from "./components/Feed";

class App extends Component {
  state = {
    subscriptions: [],
    feeds: []
  };

  componentDidMount() {
    // Load the subscription list
    fetch("/subscriptions.json")
      .then(res => {
        console.log(`OK ${res.url}`);
        return res.json();
      })
      .then(subs => {
        this.setState({ subscriptions: subs });
        subs.forEach(feed => {
          fetch(`/feed/${feed._name}.json`)
            .then(res => {
              if (res.ok) {
                console.log(`OK ${res.url}`);
                return res.json();
              } else {
                console.log(`${res.status} ${res.statusText}`);
              }
            })
            .then(feeddata => {
              this.setState({ feeds: [...this.state.feeds, feeddata] });
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
          <Grid item sm={3} className="feedList">
            <FeedList feeds={this.state.subscriptions} />
          </Grid>

          <Grid item sm={9} className="itemList">
            <Route
              path="/feed/:feedName/"
              render={({ match }) => {
                return (
                  <Feed
                    feed={this.state.feeds.find(
                      feed => feed._name === match.params.feedName
                    )}
                  />
                );
              }}
            />
          </Grid>
        </Grid>
        <footer>
          <Typography variant="caption" align="center">
            &copy; Copyright 2018 by Vince Veselosky.
            <a href="https://github.com/veselosky/feed-reader-demo">
              Get the code.
            </a>
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
