const { Purchase } = require("../../db");

const paymentFailure = async (req, res) => {
	const { external_reference, payment_id } = req.query;
	try {
		const purchase = await Purchase.findByPk(external_reference);
		purchase.state = "canceled";
		purchase.payment_id = payment_id;
		let canceledDateFormat = new Date();
		canceledDateFormat = canceledDateFormat.toISOString();
		canceledDateFormat = canceledDateFormat.slice(0, -5);
		purchase.pendingDate = canceledDateFormat;
		purchase.canceledDate = new Date();
		await purchase.save();
		res.redirect("http://localhost:3000/");
	} catch (e) {
		console.log(e);
		return res.status(400).send(e);
	}
};

module.exports = paymentFailure;
