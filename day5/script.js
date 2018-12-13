const readInput = require("../readinput");
const data = require("./input.txt")
	.trim()
	.split("");

// polymers should be array
function alchemicalReduction(polymers, loopIndex = 0) {
	while (loopIndex < polymers.length) {
		if (loopIndex + 1 !== polymers.length) {
			if (polymers[loopIndex].toLowerCase() === polymers[loopIndex + 1].toLowerCase() && polymers[loopIndex] !== polymers[loopIndex + 1]) {
				polymers.splice(loopIndex, 2);
				loopIndex = loopIndex === 0 ? 0 : loopIndex - 1;
				setTimeout(alchemicalReduction, 0, polymers, loopIndex);
			} else {
				loopIndex++;
			}
		} else {
			break;
		}
	}

	return polymers.length;
}

// console.log(alchemicalReduction(data, 0));

// part 2
let shortestPolymer = data.length;
//  "a".charCodeAt() == 97
//  "z".charCodeAt() == 122
for (let i = 97; i <= 122; i++) {
	let newPolymer = data.filter(unit => unit.toLowerCase() !== String.fromCharCode(i));
	let newPolymerLength = alchemicalReduction(newPolymer, (loopIndex = 0));

	if (newPolymerLength < shortestPolymer) shortestPolymer = newPolymerLength;
}
console.log(shortestPolymer);
