/**
 * Will split a string into 140 unicode char chunks to meet twitter message
 * size limits.
 *  - This will also add tweet counts onto the end of each tweet, e.g. [1/3]
 * @param {String} text The full tweet message to split.
 * @param {Number} maxTextLength Optional override of maximum length (if you want to use for someting else).
 * @returns {String[]} Array of tweets.
 */
import { getTweetLength } from 'twitter-text';

export default function (text: string, maxTextLength: number = 140): Array {

	const words = text.split(' ');
	const lastWord = words[words.length - 1];
	let allLines = [];

	let lineWidth = 0;
	let thisLine = '';

	if (getTweetLength(text) <= maxTextLength) return [text];
	if (words.length <= 1) throw new TypeError('Unable to split tweet, words too large.');

	words.forEach(function (word, i) {
		thisLine = thisLine.concat(`${word} `);
		lineWidth = getTweetLength(thisLine);
		if (word !== lastWord) {
			const nextWord = words[i + 1];
			const nextWordWithPager = `${nextWord}...[${allLines.length}/10]`;
			if (lineWidth + getTweetLength(nextWordWithPager) >= maxTextLength) {
				allLines.push(`${thisLine}... [${allLines.length + 1}/--0--]`);
				thisLine = '';
				lineWidth = 0;
			}
		} else {
			allLines.push(`${thisLine}... [${allLines.length + 1}/--0--]`);
			thisLine = '';
			lineWidth = 0;
		}
	});

	return allLines.map(function (line, ii) {
		if (ii + 1 === allLines.length) {
			return line.replace(
				`... [${allLines.length}/--0--]`,
				`[${allLines.length}/${allLines.length}]`
			);
		}
		return line.replace('--0--', allLines.length);
	});
}