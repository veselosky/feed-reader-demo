import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ items = [] }) => {
  if (items.length === 0) return <p>Select a feed to view articles.</p>;
  return (
    <ul>
      {items.map(item => (
        <Grid container spacing={16} key={item.guid}>
          <Grid item xs={9} m={2}>
            <Item item={item} />
          </Grid>
        </Grid>
      ))}
    </ul>
  );
};

export default ItemList;
