const { Technique } = require("../../db");

const add = async (req, res) => {
	const { name, description } = req.body;
	if (!name) return res.status(400).send("Name can't be empty");
	try {
		const addedTechnique = await Technique.create({ name, description });
		res.json(addedTechnique);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = add;
