const { Painting } = require("../../db");

const checkAvailable = async (req, res) => {
	/* const paintingPromises = paintingIds.map(/aca hago la promesa de la query/)
Promises.all(paintingPromises).then((paintings)=> aca hago un foreachdde paintings) */

	const paintingsIds = req.body.paintingsIds;

	for (p of paintingsIds) {
		const painting = await Painting.findByPk(p);

		if (!painting.isAvailable) {
			return res.json({
				status: "error",
				message: `Painting ${p} is not available`,
				isAvailable: false,
			});
		}
	}
	res.json({ status: "ok", isAvailable: true });
};
module.exports = checkAvailable;
