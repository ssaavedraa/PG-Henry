const paymentPending = async (req, res) => {
	res.json(req.query);
	res.redirect("http://localhost:3000/");
};

module.exports = paymentPending;
