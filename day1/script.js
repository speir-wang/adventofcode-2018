const readInput = require("../readinput");
const data = readInput("./input.txt").split("\n");

// part 1
const result1 = data.reduce((result, currentNumber) => result + parseInt(currentNumber), 0);
// console.log(result1);

// part 2
const resultArray = [];

const result2 = data.reduce((result, currentNumber) => {
	resultArray.push(result);
	result = result + parseInt(currentNumber);

	return result;
}, 0);

console.log(resultArray);
