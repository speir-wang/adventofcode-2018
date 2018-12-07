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

organizedDateTime.reduce((result, record) => {
	console.log(record);
	// console.log(([date, time] = [record[0].split(" ")[0], record[0].split(" ")[1]]));
}, {});
