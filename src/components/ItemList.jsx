import React from "react";
import Item from "./Item";
import Grid from "@material-ui/core/Grid";

const ItemList = ({ items = [] }) => {
  if (items.length === 0) return <p>No items found.</p>;
  return (
    <ul>
      {items.map(item => (
        <Grid container spacing={16} key={item.guid}>
          <Grid item xs={9}>
            <Item item={item} />
          </Grid>
        </Grid>
      ))}
    </ul>
  );
};

export default ItemList;
