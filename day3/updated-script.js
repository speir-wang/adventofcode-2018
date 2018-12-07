/**
 * Inspired by https://www.reddit.com/r/adventofcode/comments/a2lesz/2018_day_3_solutions/eazewlz/
 */
const readInput = require("../readinput");
const data = readInput("./input.txt")
	.trim()
	.split("\n");
const { PerformanceObserver, performance } = require("perf_hooks");
let start = performance.now();
// /**
//  * part 1
//  *
//  */
let grid = Object.create(null);

data.forEach(claim => {
	let claimID = claim.split(" ")[0];

	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;

	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;

	for (let i = x1; i <= x2; i++) {
		for (let j = y1; j <= y2; j++) {
			grid[`${i},${j}`] = (grid[`${i},${j}`] || 0) + 1;
		}
	}
});
console.log(grid);
// console.log(Object.values(grid).filter(v => v > 1).length);

// part 2
let grid2 = Object.create(null);
claims = Object.create(null);
["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"].forEach(claim => {
	let claimID = claim.split(" ")[0];

	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;
	claims[claimID] = true;
	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;
	for (let i = x1; i <= x2; i++) {
		for (let j = y1; j <= y2; j++) {
			if (grid2[`${i},${j}`]) {
				claims[grid2[`${i},${j}`]] = false;
				claims[claimID] = false;
			}
			grid2[`${i},${j}`] = claimID;
		}
	}
});
console.log(claims);
// console.log(Object.entries(claims).filter(v => v[1]));

let end = performance.now();
console.log((end - start) * 0.001);
