# DO NOT USE

This is just a demo application for me to play with React and Node.
Move along. These aren't the droids you're looking for.

The demo is live at [readme.mindvessel.net](http://readme.mindvessel.net).

## RSS Reader App

The goal here is to implement an RSS reader that runs in the browser, replacing heavyweight server-side feed aggregators. This is, of course, impossible due to browser security constraints and the fact that NOBODY puts CORS headers on their RSS feeds even though that would be perfectly rational.

For this demo, I'm just converting feeds to JSON and saving them locally. If we wanted to go to production with this thing, here are some possible solutions:

- [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere/) is an open-source CORS proxy for Node.js. You could run one of these on a tiny server and whitelist all the domains where you serve websites. You still have to run infrastructure, but not much.
- Lambda/API Gateway: Write a tiny Lambda function that grabs subscribed feeds and writes them to the S3 bucket that serves the app. It could read the list of subscribed feeds from the bucket. But managing the list would be a pain. (Tool to manage the list sold separately?)

## Roadmap

### Iteration 001

Just get something working.

### Iteration 002

- Introduce proper routing.
- Distinguish the "selected" feed by appearance (not clickable).
- Changed my mind about loading feeds on demand. Later I will need all the items to do unread counts anyway. May as well load everything up. Keep an eye on memory usage!

## Misc

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For information on how to perform common tasks go [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
