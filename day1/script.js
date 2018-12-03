const readInput = require("../readinput");
const data = readInput("./input.txt").split("\n");

// // part 1
const result1 = data.reduce((result, currentNumber) => result + parseInt(currentNumber), 0);
// console.log(result1);

// part 2
const temp = [];
let firstRepeatResult;
function firstRepeat(loopedArray, initial) {
	let found = false;
	let result = initial;

	result = loopedArray.slice(0).reduce((result, currentNumber, i, arr) => {
		if (temp.includes(result)) {
			found = true;
			arr.splice(1);
			firstRepeatResult = result;
			console.log(result);
		}
		temp.push(result);
		result = result + parseInt(currentNumber);

		return result;
	}, result);
	if (!found) firstRepeat(loopedArray, result);

	return firstRepeatResult;
}

firstRepeat(data, 0);
