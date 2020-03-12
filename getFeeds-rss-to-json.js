// const FeedParser = require("feedparser");
const fetch = require("node-fetch");
const fs = require("fs");
const feeds = require("./public/subscriptions.json");
const Feed = require("rss-to-json");

feeds.forEach(feed => {
  Feed.load(feed._url, (err, rss) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFile(`public/feed/${feed._name}.json`, JSON.stringify(rss), err => {
      console.log(err ? err : `${feed._name}.json saved`);
    });
  }); // Feed.load
}); // foreach feed
