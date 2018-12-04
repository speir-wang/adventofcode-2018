const readInput = require("../readinput");
const data = readInput("./input.txt").split("\n");
/**
 *
 * Part 1
 */
function findTotalAppearance(boxIDs) {
	// return [ appearTwice ? 1 : 0, appearThrice ? 1 : 0]

	let appearanceObject = boxIDs.split("").reduce((result, currentLetter, index, array) => {
		if (!result.hasOwnProperty(currentLetter)) result[currentLetter] = 0;

		if (array.slice(index).includes(currentLetter)) result[currentLetter] += 1;
		return result;
	}, {});

	let appearTwice = Object.values(appearanceObject).includes(2) ? 1 : 0;
	let appearThrice = Object.values(appearanceObject).includes(3) ? 1 : 0;

	return [appearTwice, appearThrice];
}

const checksum = data.reduce(
	(checksumArray, currentBoxID) => {
		let currentBoxIDResult = findTotalAppearance(currentBoxID);
		checksumArray[0] += currentBoxIDResult[0];
		checksumArray[1] += currentBoxIDResult[1];

		return checksumArray;
	},
	[0, 0]
);
console.log(checksum[0] * checksum[1]);
