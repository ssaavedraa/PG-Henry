const { Purchase } = require("../../db");

const paymentSuccess = async (req, res) => {
	const { external_reference, payment_id } = req.query;
	try {
		const purchase = await Purchase.findByPk(external_reference);
		purchase.state = "pending";
		purchase.payment_id = payment_id;
		let pendingDateFormat = new Date();
		pendingDateFormat = pendingDateFormat.toISOString();
		pendingDateFormat = pendingDateFormat.slice(0, -5);
		purchase.pendingDate = pendingDateFormat;
		await purchase.save();
		res.redirect("http://localhost:3000/");
	} catch (e) {
		console.log(e);
		return res.status(400).send(e);
	}
};

module.exports = paymentSuccess;
