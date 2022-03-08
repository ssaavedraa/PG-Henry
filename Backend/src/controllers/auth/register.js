const { User } = require("../../db");
const { hashSync } = require("bcrypt");

const register = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const existingUser = await User.findOne({ where: { email: email } });

	if (existingUser) return res.send("User already exists");

	const hashedPassword = hashSync(password, 10);
	try {
		const user = await User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: hashedPassword,
			role: "user",
		});
		const sendUserInfo = {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
		};
		res.json(sendUserInfo);
	} catch (e) {
		res.status(400).json(e);
	}
};
module.exports = register;
