import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import RssFeed from "@material-ui/icons/RssFeed";

const FeedList = ({ feeds = [], onSelectFeed }) => {
  if (feeds.length === 0) return <p>No feeds yet. Add one!</p>;
  return (
    <React.Fragment>
      <h2>Feeds:</h2>
      <List>
        {feeds.map(feed => {
          var leader =
            feed.image && feed.image.url ? (
              <Avatar src={feed.image.url} />
            ) : (
              <RssFeed />
            );

          return (
            <ListItem
              key={feed._name}
              button
              onClick={() => onSelectFeed(feed._name)}
            >
              {leader}
              <ListItemText primary={feed.title} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default FeedList;
