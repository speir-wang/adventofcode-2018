const readInput = require("../readinput");
const data = require("./input.txt")
	.trim()
	.split("\n")
	.map(coordinate => [parseInt(coordinate.split(", ")[0]), parseInt(coordinate.split(", ")[1])]);

//  1. find the most far away coordinate
//  2. name each coordinates
//  3.
let farestPoint = data.reduce(
	(result, coordinate) => {
		let x = parseInt(coordinate[0]),
			y = parseInt(coordinate[1]);

		let resultX = result[0],
			resultY = result[1];

		if (x + y > resultX + resultY) {
			result[0] = x;
			result[1] = y;
		}
		return result;
	},
	[0, 0]
);
// console.log(farestPoint);

const map = [];
for (let i = 0; i <= (farestPoint[0] > farestPoint[1] ? farestPoint[0] : farestPoint[1]); i++) {
	for (let j = 0; j <= (farestPoint[0] > farestPoint[1] ? farestPoint[0] : farestPoint[1]); j++) {
		map.push([i, j]);
	}
}
// console.log(map);

/**
 *
 * @param {array} currentCoordinate
 * @param {array} locationList
 * @param {array} farestPoint
 */
function findNearestLocation(currentCoordinate, locationList, farestPoint) {
	/**
	 * x=(a,b) and y=(c,d)
	 * Manhattan distance: |a−c|+|b−d|
	 */
	let nearestLocation = [...farestPoint],
		numberOfSameNearestLocation = 1,
		nearestDistance = Math.abs(currentCoordinate[0] - nearestLocation[0]) + Math.abs(currentCoordinate[1] - nearestLocation[1]);

	/**
	 * This loop is NOT correct. It should only mark the coordinate as "." if it has TWO nearest locations.
	 * Based on the exmaple in put, current bug coordinate [4, 4] is marked as "." because it has the same M
	 * distance from B and C, but the nearest location is D.
	 *
	 * Need to check if the coordinate has ONLY one nearest location.
	 */
	for (let i = 0; i < locationList.length; i++) {
		let tempDistance = Math.abs(currentCoordinate[0] - locationList[i][0]) + Math.abs(currentCoordinate[1] - locationList[i][1]);

		if (tempDistance === nearestDistance) numberOfSameNearestLocation += 1;
		if (tempDistance < nearestDistance) {
			nearestDistance = tempDistance;
			nearestLocation = [...locationList[i]];
		}

		if (numberOfSameNearestLocation > 1) {
			return ".";
			break;
		}
	}
	// console.log(nearestLocation, numberOfSameNearestLocation);
	return nearestLocation;
}

const transformedMap = map.map(coordinate => {
	let nearestLocation = findNearestLocation(coordinate, data, farestPoint);
	// let tempObject = Object.create(null);
	// tempObject.nearestLocation = nearestLocation;
	// return coordinate.push(tempObject);
	console.log(coordinate, nearestLocation);
	return coordinate;
});

// console.log(transformedMap);
