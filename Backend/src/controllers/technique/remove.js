const { Technique } = require("../../db");

const remove = async (req, res) => {
	const deleteId = req.params.id;
	const technique = await Technique.findByPk(deleteId);
	if (!technique)
		return res.status(400).send(`No technique with Id:${deleteId} found`);
	try {
		await Technique.destroy({ where: { id: deleteId } });
		res.send("Technique Deleted");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = remove;
