const { Technique } = require("../../db");

const add = async (req, res) => {
	const { name, description } = req.body;
	try {
		const addedTechnique = await Technique.create({ name, description });
		res.json(addedTechnique);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = add;
