# Tweet Splitter

Work in Progress.

A library which takes a string, and breaks it down into multiple tweets for you to send.

> npm i --save tweet-splitter

## Usage

```javascript
import tweetSplitter from 'tweet-splitter';

const myTweet = '@invertaseio Break me down!';

console.dir(tweetSplitter(myTweet));
// [ '@invertaseio Break me down!' ];
```

## Tests

Ensure the `devDependencies` are installed, and run `npm run test`;