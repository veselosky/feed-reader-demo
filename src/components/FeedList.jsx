import React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import RssFeed from "@mui/icons-material/RssFeed";
import Typography from "@mui/material/Typography";

const FeedList = ({ feeds = [], selectedFeed, onSelectFeed }) => {
  if (feeds.length === 0) return <p>No feeds yet. Add one!</p>;
  return (
    <React.Fragment>
      <Typography variant="h2" ml={2}>Feeds</Typography>
      <List>
        {feeds.map(feed => {
          var leader =
            feed.image && feed.image.url ? (
              <Avatar src={feed.image.url} />
            ) : (
              <RssFeed />
            );

          return (
              <ListItemButton
                key={feed._name}
                selected={selectedFeed == feed._name}
                onClick={() => onSelectFeed(feed._name)}>
                <ListItemIcon>
                {leader}
                </ListItemIcon>
                <ListItemText primary={feed.title} />
              </ListItemButton>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default FeedList;
