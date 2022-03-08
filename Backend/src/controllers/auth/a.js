const { User } = require("../../db");

const a = async (req, res) => {
	//const users = await User.findAll();
	const sendUserInfo = {
		id: req.user.id,
		firstName: req.user.firstName,
		lastName: req.user.lastName,
		email: req.user.email,
		role: req.user.role,
	};
	return res.json(sendUserInfo);
};
module.exports = a;
