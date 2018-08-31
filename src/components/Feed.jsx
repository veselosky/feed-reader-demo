import React, { Fragment } from "react";
import ItemList from "./ItemList";

const Feed = ({ feed }) => {
  return <Fragment>{feed && <ItemList items={feed.items} />};</Fragment>;
};

export default Feed;
