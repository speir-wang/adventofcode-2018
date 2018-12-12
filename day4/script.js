const readInput = require("../readinput");
const data = require("./input.txt")
	.trim()
	.split("\n");

const organizedDateTime = data
	.map(record => {
		let dateTimeArray = record.split("] ");
		dateTimeArray[0] = dateTimeArray[0].replace(/[\[\]']+/g, "");

		return dateTimeArray;
	})
	.sort((date1, date2) => new Date(date1[0]) - new Date(date2[0]));

let currentGuard;
const sleepingMinutesObject = {};
for (let i = 0; i < 60; i++) {
	sleepingMinutesObject[i] = 0;
}

const organizedList = organizedDateTime.reduce((result, record) => {
	if (record[1].includes("#")) {
		currentGuard = record[1].split(" ")[1];
		if (!result.hasOwnProperty(currentGuard)) {
			result[currentGuard] = {
				lastWakeUpTime: new Date(record[0]),
				totalWakeUpTime: 0,
				lastSleepTime: "",
				totalSleepTime: 0,
				sleepingMinutes: { ...sleepingMinutesObject }
			};
		}
	}

	if (record[1].includes("falls")) {
		result[currentGuard].lastSleepTime = new Date(record[0]);
	}

	if (record[1].includes("wakes")) {
		result[currentGuard].lastWakeUpTime = new Date(record[0]);
		// total sleeping time = lastWakeUpTime - lastSleepTime
		let currentSleepingTime = result[currentGuard].lastWakeUpTime.getMinutes() - result[currentGuard].lastSleepTime.getMinutes();

		result[currentGuard].totalSleepTime = result[currentGuard].totalSleepTime + currentSleepingTime;

		for (let i = result[currentGuard].lastSleepTime.getMinutes(); i < result[currentGuard].lastWakeUpTime.getMinutes(); i++) {
			result[currentGuard].sleepingMinutes[i] += 1;
		}
	}

	return result;
}, {});

// const
const lazyGuard = Object.entries(organizedList).reduce(
	(result, guard) => {
		const guardData = { ...guard[1] };
		const guardID = guard[0];

		if (guardData.totalSleepTime > result.maxTotalSleepTime) {
			result.maxTotalSleepTime = guardData.totalSleepTime;
			result.lazyGuard = guardID;
			const sortable = [];
			for (let minute in guardData.sleepingMinutes) {
				sortable.push([minute, guardData.sleepingMinutes[minute]]);
			}
			sortable.sort(function(a, b) {
				return b[1] - a[1];
			});
			const mostSleepMinute = sortable[0];
			result.mostSleepMinute = {
				[mostSleepMinute[0]]: mostSleepMinute[1]
			};
		}

		return result;
	},
	{ lazyGuard: "", maxTotalSleepTime: 0, mostSleepMinute: {} }
);

console.log(lazyGuard);
