import { assert } from 'chai';
import tweetSplitter from './tweet-splitter';

const SMALL_TWEET = 'A small tweet.';
const SMALL_TWEET_RESULT = ['A small tweet.'];

const LONG_WORD_TWEET = 'foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar';

const MULTI_TWEET = 'I am a really long tweet which should get broken down into multiple tweets when being used with https://github.com/invertase/tweet-splitter, a library which obviously splits tweets into multiple tweets, der.';
const MULTI_TWEET_RESULT = [ 'I am a really long tweet which should get broken down into multiple tweets when being used with https://github.com/invertase/tweet-splitter, a library ... [1/2]',
	'which obviously splits tweets into multiple tweets, der. [2/2]' ];

describe('Tweet Splitter', () => {

	it('Should not split a tweet if already valid', done => {
		assert.deepEqual(tweetSplitter(SMALL_TWEET), SMALL_TWEET_RESULT);
		done();
	});

	it('Should not thrown an exception if one word is longer than the limit', done => {
		try {
			tweetSplitter(LONG_WORD_TWEET);
		} catch (err) {
			assert.deepEqual(err, new TypeError('Unable to split tweet, words too large.'));
		}
		done();
	});

	it('Should split a tweet into multiple tweets', done => {
		assert.deepEqual(tweetSplitter(MULTI_TWEET), MULTI_TWEET_RESULT);
		done();
	});

});