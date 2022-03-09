const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

favoriteControllers = {};
fs
	.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const [fileName] = file.split(".");
		favoriteControllers[fileName] = require(path.join(__dirname, file));
	});

module.exports = {
	...favoriteControllers,
};
