const FeedParser = require("feedparser");
const fetch = require("node-fetch");
const fs = require("fs");

// TODO Read list of feeds from a JSON file
var feeds = [
  {
    _name: "veselosky.me",
    _url: "https://vince.veselosky.me/feed/",
    items: []
  },
  {
    _name: "thecreativepenn.com",
    _url: "http://www.thecreativepenn.com/feed/",
    items: []
  }
];

feeds.forEach(feed => {
  fetch(feed._url)
    .then(res => {
      if (res.ok) {
        console.log(`Got response for ${res}`);
      }
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
        fs.writeFile(`public/${feed._name}.json`, JSON.stringify(feed), err => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${feed._name}.json saved`);
          }
        });
      });
      res.body.pipe(fp);
    })
    .catch(error => {
      console.log(`Uh oh! ${error}`);
    });
});
