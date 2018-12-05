const readInput = require("../readinput");
const data = readInput("./input.txt").split("\n");
const { PerformanceObserver, performance } = require("perf_hooks");
let start = performance.now();

/**
 * part 1
 * it takes roughly 3 mintues to calculate the result, this is not good
 */

let temp = [];
let overlap = [];
data.forEach(claim => {
	let claimID = claim.split(" ")[0];

	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;

	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;

	if (x2 === 0) {
		for (let j = y1; j <= y2; j++) {
			let o = x1 + "," + j;

			if (!temp.includes(o)) temp.push(o);
			else if (!overlap.includes(o)) overlap.push(o);
			else console.log(claimID);
		}
	}
	if (y2 === 0) {
		for (let i = x1; i <= x2; i++) {
			let o = i + "," + y1;

			if (!temp.includes(o)) temp.push(o);
			else if (!overlap.includes(o)) overlap.push(o);
			else console.log(claimID);
		}
	}
	if (x2 !== 0 && y2 !== 0) {
		for (let i = x1; i <= x2; i++) {
			for (let j = y1; j <= y2; j++) {
				let o = i + "," + j;

				if (!temp.includes(o)) temp.push(o);
				else if (!overlap.includes(o)) overlap.push(o);
				else console.log(claimID);
			}
		}
	}
	// console.log(claimID);
});
console.log(overlap);
console.log(overlap.length);

// part 2
loop1: for (let claim of data) {
	let claimID = claim.split(" ")[0];

	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;

	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;

	if (x2 === 0) {
		for (let j = y1; j <= y2; j++) {
			let o = x1 + "," + j;
			let tempObject = {
				[claimID]: false
			};
			if (overlap.includes(o)) {
				continue loop1;
			} else {
				tempObject[claimID] = true;
				console.log(tempObject);
			}
		}
	}
	if (y2 === 0) {
		for (let i = x1; i <= x2; i++) {
			let o = i + "," + y1;

			let tempObject = {
				[claimID]: false
			};
			if (overlap.includes(o)) {
				continue loop1;
			} else {
				tempObject[claimID] = true;
				console.log(tempObject);
			}
		}
	}
	if (x2 !== 0 && y2 !== 0) {
		for (let i = x1; i <= x2; i++) {
			for (let j = y1; j <= y2; j++) {
				let o = i + "," + j;

				let tempObject = {
					[claimID]: false
				};
				if (overlap.includes(o)) {
					continue loop1;
				} else {
					tempObject[claimID] = true;
					console.log(tempObject);
				}
			}
		}
	}
}

let end = performance.now();
console.log((end - start) * 0.001);
