const fs = require("fs");

require.extensions[".txt"] = function(module, filename) {
	module.exports = fs.readFileSync(filename, "utf8");
};

// const fs = require("fs");

// function readInput(filePath) {
// 	return fs.readFileSync(filePath, "utf8");
// }

module.exports = fs;
