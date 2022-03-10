const { User } = require("../../db");

const changeLastName = async (req, res) => {
	const id = req.user.id;
	const newLastName = req.body.lastName;
	try {
		const user = await User.findOne({
			where: { id },
		});
		if (!user) throw new Error("couldn't find user with id: " + id);
		user.lastName = newLastName;
		await user.save();
		res.json("Success");
	} catch (err) {
		res.status(400).json(err.message);
	}
};
module.exports = changeLastName;
