// const readInput = require("../readinput");
// const data = readInput("./input.txt").split("\n");

// console.log(data);

// part 1

function findTotalAppearance(boxIDs) {
	let appearanceObject = boxIDs.split("").reduce((result, currentLetter, index, array) => {
		if (!result.hasOwnProperty(currentLetter)) result[currentLetter] = 0;

		if (array.slice(index).includes(currentLetter)) {
			result[currentLetter] = result[currentLetter] + 1;
		}

		return result;
	}, {});

	console.log(Object.values(appearanceObject));

	return appearanceObject;
}

findTotalAppearance("bababc");
/**
 * loop through each box ID
 * if letter appears
 * */
