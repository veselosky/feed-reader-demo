const FeedParser = require("feedparser");
const fetch = require("node-fetch");
const fs = require("fs");

// TODO Read list of feeds from a JSON file
fs.readFile("public/subscriptions.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var feeds = JSON.parse(data);

  feeds.forEach(feed => {
    if (feed.items === undefined) feed.items = [];
    fetch(feed._url)
      .then(res => {
        if (res.ok) {
          const fp = new FeedParser();
          fp.on("error", error => console.log(error));
          fp.on("meta", meta => Object.assign(feed, meta));
          fp.on("readable", function() {
            // cannot use arrow func, need stream as this
            let item;
            while ((item = this.read())) {
              feed.items.push(item);
            }
          });
          fp.on("end", () => {
            fs.writeFile(
              `public/feed/${feed._name}.json`,
              JSON.stringify(feed),
              err => {
                console.log(err ? err : `${feed._name}.json saved`);
              }
            );
          });
          res.body.pipe(fp);
        } else {
          console.log(
            `Something went wrong fetching ${feed._name}: ${res.status} ${
              res.statusText
            }`
          );
        }
      })
      .catch(error => {
        console.log(`Uh oh! ${error}`);
      });
  });
});
