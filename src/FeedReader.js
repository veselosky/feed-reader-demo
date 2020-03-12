import React, { Component } from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FeedList from "./components/FeedList";
import Feed from "./components/Feed";

class FeedReader extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">A React RSS Reader Demo</h1>
        </header>
        <Grid container spacing={16}>
          <Grid item sm={3} className="feedList">
            <FeedList feeds={this.props.subscriptions} />
          </Grid>

          <Grid item sm={9} className="itemList">
            <Route
              path="/feed/:feedName/"
              render={({ match }) => {
                return (
                  <Feed
                    feed={this.props.feeds.find(
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

export default FeedReader;
