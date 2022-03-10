const { User } = require("../../db");

const changePassword = async (req, res) => {
	const id = req.user.id;
	const newPassword = req.body.password;
	try {
		const user = await User.findOne({
			where: { id },
		});
		if (!user) throw new Error("couldn't find user with id: " + id);
		user.password = newPassword;
		await user.save();
		res.json("Success");
	} catch (err) {
		res.status(400).json(err.message);
	}
};
module.exports = changePassword;
