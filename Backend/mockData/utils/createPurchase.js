const { Purchase, Painting, ContactInfo } = require("../../src/db");
const contactInfoByuSer = require("../data/contactInfoByuser.json");
const createPurchase = async (p) => {
	const createdPurchase = await Purchase.create(p);
	let paintingsPurchased = p.paintingId;
	if (
		createdPurchase.state == "completed" ||
		createdPurchase.state == "pending"
	) {
		paintingsPurchased = await Painting.findAll({
			where: { id: p.paintingId },
		});
		for (let i = 0; i < paintingsPurchased.length; i++) {
			paintingsPurchased[i].isAvailable = false;
			await paintingsPurchased[i].save();
		}
	}
	await createdPurchase.addPaintings(paintingsPurchased);
	const contactInfoToAdd = contactInfoByuSer.find((c) => p.userId == c.userId);

	await createdPurchase.createContactInfo(contactInfoToAdd);
};

module.exports = createPurchase;
