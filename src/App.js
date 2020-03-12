/**
 * This top-level App component implements no UI. It exists to hold the
 * application state and wrap the UI with a router.
 */

import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import FeedReader from "./FeedReader";

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
      <BrowserRouter>
        <FeedReader {...this.state} />
      </BrowserRouter>
    );
  }
}

export default App;
