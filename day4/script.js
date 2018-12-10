const readInput = require("../readinput");
const data = readInput("./input.txt")
	.trim()
	.split("\n");
const { PerformanceObserver, performance } = require("perf_hooks");
let start = performance.now();

const organizedDateTime = data
	.map(record => {
		let dateTimeArray = record.split("] ");
		dateTimeArray[0] = dateTimeArray[0].replace(/[\[\]']+/g, "");

		return dateTimeArray;
	})
	.sort((date1, date2) => new Date(date1[0]) - new Date(date2[0]));

/**
 * let a = [ '1518-03-31 00:03', 'Guard #223 begins shift' ]
 *
 */
/**
 * data structure:
 * {
 *   GuardID: {
 *     minutesOnSleep: number of times sleep
 *   }
 * }
 */
const finalResult = organizedDateTime.reduce((result, record) => {
	let id;
	let time = record[0];

	if (record[1].includes("#")) {
		id = record[1].split(" ")[1];

		if (!result[id]) {
			result[id] = Object.create(null);
			result[id].up = [];
			result[id].totalSleepTime = 0;
		}
		result[id].up.push(time);
	}

	if (record[1].includes("up")) {
		// result[id].up.push(time);
	}
	if (record[1].includes("asleep")) {
		// console.log(JSON.stringify(result));
	}

	return result;
}, {});

console.log(finalResult);
