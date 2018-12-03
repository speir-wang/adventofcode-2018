const fs = require("fs");

function readInput(filePath) {
	return fs.readFileSync(filePath, "utf8");
}

module.exports = readInput;
