const { Purchase, Painting, ContactInfo } = require("../../db");

const contactInfo = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		telephone,
		postCode,
		city,
		street,
		streetNumber,
		floor,
		unit,
		purchaseId,
	} = req.body;

	const paintingsIds = req.body.paintings;

	console.log(req.body)
	let paintings = [];
	let totalPrice = 0;

	for (p of paintingsIds) {
		const painting = await Painting.findByPk(p);
		painting.isAvailable = false;
		await painting.save();
		paintings.push(painting);
		totalPrice += painting.price;
	}
	try {
		const info = await ContactInfo.create({
			firstName,
			lastName,
			telephone,
			postCode,
			city,
			email,
			street,
			streetNumber,
			floor,
			unit,
		});

		const purchase = await Purchase.findOne({ where: { id: purchaseId } });

		await purchase.addPaintings(paintings);
		purchase.totalPrice = totalPrice;
		purchase.contactInfoId = info.id;
		await purchase.save();

		res.json({ status: "ok", info });
	} catch (e) {
		console.log(e);
		res.send(e);
	}
};
module.exports = contactInfo;
