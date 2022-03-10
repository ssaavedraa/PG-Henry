const { User } = require("../../db");

const changeName = async (req, res) => {
	const id = req.user.id;
	const newName = req.body.firstName;
	const newLastName = req.body.lastName;
	try {
		const user = await User.findOne({
			where: { id },
		});
		if (!user) throw new Error("couldn't find user with id: " + id);
		if (newName) {
			user.firstName = newName;
		}
		if (newLastName) {
			user.lastName = newLastName;
		}

		await user.save();
		res.json("Success");
	} catch (err) {
		res.status(400).json(err.message);
	}
};
module.exports = changeName;
