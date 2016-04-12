# Tweet Splitter

A library which takes a string, and breaks it down into multiple tweets for you to send.

> npm i --save tweet-splitter

## Usage

```javascript
import tweetSplitter from 'tweet-splitter';

const myTweet = '@teamfa Break me down!';

console.dir(tweetSplitter(myTweet));
// [ '@teamfa Break me down!' ];
```

## Tests

Ensure the `devDependencies` are installed, and run `npm run test`;
