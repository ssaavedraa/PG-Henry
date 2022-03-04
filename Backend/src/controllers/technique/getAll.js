const { Technique } = require("../../db");

const getAll = async (req, res) => {
	try {
		const allTechniques = await Technique.findAll();
		if (!allTechniques.length) return res.status(404).send("No techniques found");
		res.json(allTechniques);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getAll;
