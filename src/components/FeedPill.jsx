import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import RssFeed from "@material-ui/icons/RssFeed";

const FeedPill = ({ feed }) => {
  var leader =
    feed.image && feed.image.url ? (
      <Avatar src={feed.image.url} />
    ) : (
      <RssFeed />
    );
  return (
    <ListItem key={feed._name}>
      {leader}
      <ListItemText primary={feed.title} />
    </ListItem>
  );
};

export default FeedPill;
