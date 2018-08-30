usage = `
Usage:
  subscribeTo.js <feedurl> [--name=<name>]
  subscribeTo.js --not=<name>
`;
const FeedParser = require("feedparser");
const fetch = require("node-fetch");
const fs = require("fs");
const { docopt } = require("docopt");
const slugify = require("slugify");
const subsFile = "./public/subscriptions.json";
var subscriptions = require(subsFile);

if (process.argv.length < 3) {
  console.log(usage);
  console.log(
    "Available subs:\n" +
      subscriptions.map(sub => `${sub._name} (${sub._url})`).join("\n")
  );
  process.exit();
}
var options = docopt(usage);
var removedFeed = options["--not"];
var feedUrl = options["<feedurl>"];
var name = options["--name"];
var newsubs;

if (removedFeed) {
  newsubs = subscriptions.filter(sub => sub._name != removedFeed);
  fs.writeFile(subsFile, JSON.stringify(newsubs, null, 2), err => {
    console.log(err ? err : `${subsFile} saved`);
  });
} else if (feedUrl) {
  // Fetch and parse the feed so that:
  // a) We know that there's a valid feed at that URL
  // b) We can pull the title and image from the feed
  fetch(feedUrl)
    .then(res => {
      if (res.ok) {
        var feed = {};
        const fp = new FeedParser();
        fp.on("error", error => console.log(error));
        fp.on("meta", meta => {
          // Update feed obj and write subs
          feed.title = meta.title;
          feed.image = meta.image ? meta.image : null;
          feed._url = res.url; // in case of redirects
          feed._name = name ? name : slugify(meta.title);
          newsubs = [...subscriptions, feed];
          fs.writeFile(subsFile, JSON.stringify(newsubs, null, 2), err => {
            console.log(err ? err : `${subsFile} saved`);
          });
        });
        res.body.pipe(fp);
      } else {
        console.log(
          `Something went wrong fetching ${feedUrl}: ${res.status} ${
            res.statusText
          }`
        );
      }
    })
    .catch(error => {
      console.log(`Uh oh! ${error}`);
    });
}
