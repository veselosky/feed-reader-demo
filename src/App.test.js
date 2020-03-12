import React from "react";
import ReactDOM from "react-dom";
import FeedReader from "./FeedReader";
import { MemoryRouter } from "react-router-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <FeedReader subscriptions={[]} feeds={[]} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
