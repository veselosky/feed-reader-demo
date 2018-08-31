import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import List from "@material-ui/core/List";
import FeedPill from "./FeedPill";

const FeedList = ({ feeds = [], onSelectFeed }) => {
  if (feeds.length === 0) return <p>No feeds yet. Add one!</p>;
  // TODO Style non-linked (current) feed pill differently
  return (
    <React.Fragment>
      <h2>Feeds:</h2>
      <List>
        {feeds.map(feed => {
          return (
            <Switch key={feed._name}>
              <Route
                path={`/feed/${feed._name}`}
                render={props => {
                  return <FeedPill feed={feed} {...props} />;
                }}
              />
              <Route
                render={props => {
                  return (
                    <Link to={`/feed/${feed._name}/`}>
                      <FeedPill feed={feed} {...props} />
                    </Link>
                  );
                }}
              />
            </Switch>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default FeedList;
