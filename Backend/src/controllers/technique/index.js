const fs = require("fs")
const path = require("path")
const basename = path.basename(__filename)

techniqueControllers = {}
fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const [fileName] = file.split(".")
		techniqueControllers[fileName] = require(path.join(__dirname, file))
	})

module.exports = {
	...techniqueControllers,
}
