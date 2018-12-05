/**
 * Inspired by https://www.reddit.com/r/adventofcode/comments/a2lesz/2018_day_3_solutions/eazewlz/
 */
const readInput = require("../readinput");
const data = readInput("./input.txt")
	.trim()
	.split("\n");
const { PerformanceObserver, performance } = require("perf_hooks");
let start = performance.now();
/**
 * part 1
 *
 */
grid = Object.create(null);
data.forEach(claim => {
	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;

	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;

	for (let i = x1; i <= x2; i++) {
		for (let j = y1; j <= y2; j++) {
			let o = i + "," + j;

			grid[`${i},${j}`] = (grid[`${i},${j}`] || 0) + 1;
		}
	}
});
console.log(grid);
console.log(Object.values(grid).filter(v => v > 1).length);
// console.log(overlap.length);

// part 2

// mainloop: for (let claim of data) {
// 	let unicorn = "";
// 	let claimID = claim.split(" ")[0];

// 	let x1 = parseInt(claim.split(" ")[2].split(",")[0]);
// 	let x2 = x1 + parseInt(claim.split(" ")[3].split("x")[0]) - 1;

// 	let y1 = parseInt(claim.split(" ")[2].split(",")[1]);
// 	let y2 = y1 + parseInt(claim.split(" ")[3].split("x")[1]) - 1;

// 	if (x2 === 0) {
// 		for (let j = y1; j <= y2; j++) {
// 			let o = x1 + "," + j;
// 			if (!overlap.includes(o)) {
// 				unicorn = claimID;
// 			} else {
// 				unicorn = "";
// 				continue mainloop;
// 			}
// 		}
// 	}

// 	if (y2 === 0) {
// 		for (let i = x1; i <= x2; i++) {
// 			let o = i + "," + y1;

// 			if (!overlap.includes(o)) {
// 				unicorn = claimID;
// 			} else {
// 				unicorn = "";
// 				continue mainloop;
// 			}
// 		}
// 	}

// 	if (x2 !== 0 && y2 !== 0) {
// 		for (let i = x1; i <= x2; i++) {
// 			for (let j = y1; j <= y2; j++) {
// 				let o = i + "," + j;
// 				if (!overlap.includes(o)) {
// 					console.log(claimID, " this id is not overlapped: ", o);
// 					unicorn = claimID;
// 				} else {
// 					unicorn = "";
// 					console.log(claimID, " this overlapped: ", o);
// 					continue mainloop;
// 				}
// 			}
// 		}
// 	}

// 	if (unicorn.length > 0) {
// 		console.log("unicorn: ", unicorn);
// 		break mainloop;
// 	}
// }

let end = performance.now();
console.log((end - start) * 0.001);
