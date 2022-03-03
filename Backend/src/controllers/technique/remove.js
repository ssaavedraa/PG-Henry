const { Technique } = require("../../db");

const remove = async (req, res) => {
	const deleteId = req.params.id;

	try {
		await Technique.destroy({ where: { id: deleteId } });
		res.json("Technique Deleted");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = remove;
