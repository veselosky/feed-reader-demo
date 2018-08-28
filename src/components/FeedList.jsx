import React from "react";

const FeedList = ({ feeds = [] }) => {
  if (feeds.length === 0) return <p>No feeds yet. Add one!</p>;
  return (
    <React.Fragment>
      <h2>Feeds:</h2>
      <ul>
        {feeds.map(feed => {
          return <li key={feed._name}>{feed.title}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default FeedList;
