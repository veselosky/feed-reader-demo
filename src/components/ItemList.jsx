import React from "react";
import Item from "./Item";

const ItemList = ({ items = [] }) => {
  if (items.length === 0) return <p>No items found.</p>;
  return (
    <ul>
      {items.map(item => (
        <li>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
