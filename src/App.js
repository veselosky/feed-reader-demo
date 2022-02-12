import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./App.css";
import FeedList from "./components/FeedList";
import ItemList from "./components/ItemList";

class App extends Component {
  state = {
    selected: null,
    feeds: [],
  };

  handleSelectFeed = (feedname) => {
    this.setState({ selected: feedname });
  };

  componentDidMount() {
    // implement data fetch here
    fetch("/subscriptions.json")
      .then((res) => {
        return res.json();
      })
      .then((subs) => {
        subs.forEach((feed) => {
          fetch(`${feed._name}.json`)
            .then((res) => {
              return res.json();
            })
            .then((feeddata) => {
              Object.assign(feed, feeddata);
              this.setState({ feeds: [...this.state.feeds, feed] });
            });
        });
      });
  }

  render() {
    var feed;
    [feed] = this.state.feeds.filter((f) => {
      return f._name === this.state.selected;
    });
    var items = feed ? feed.items : [];

    return (
      <React.Fragment>
        <header className="App-header">
          <Typography variant="h1" ml={2}>
            A React RSS Reader Demo
          </Typography>
          <Typography variant="subtitle1">
            A very simple app to demonstrate basic front-end skills.
          </Typography>
        </header>
        <Grid container spacing={16}>
          <Grid item sm={3} className="feedList">
            <FeedList
              feeds={this.state.feeds}
              selectedFeed={this.state.selected}
              onSelectFeed={this.handleSelectFeed}
            />
          </Grid>

          <Grid item sm={9} className="itemList">
            <ItemList items={items} />
          </Grid>
        </Grid>
        <footer>
          <Typography variant="body2" align="center" justifyContent="center">
            &copy; Copyright 2018-2022 by Vince Veselosky.{" "}
            <a href="https://github.com/veselosky/feed-reader-demo">
              View the source code.
            </a>
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
