const { Technique } = require("../../db")

const add = async (req, res) => {
	const { name, description } = req.body
	console.log(req.body)
	console.log(name, description)
	console.log(Technique)
	try {
		const addedTechnique = await Technique.create({ name, description })
		console.log(addedTechnique)
		res.json(addedTechnique)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}

module.exports = add
