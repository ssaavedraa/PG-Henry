const { Purchase } = require("../../db");
const getToday = require("../purchase/Utils/getToday");

const paymentSuccess = async (req, res) => {
	const { external_reference, payment_id } = req.query;
	try {
		const { purchaseId, url } = JSON.parse(external_reference);
		const purchase = await Purchase.findByPk(purchaseId);
		purchase.state = "pending";
		purchase.payment_id = payment_id;
		purchase.pendingDate = getToday();
		await purchase.save();
		res.redirect(`http://${url}`);
	} catch (e) {
		console.log(e);
		return res.status(400).send(e);
	}
};

module.exports = paymentSuccess;
