const { User } = require("../../db");
const { compareSync } = require("bcrypt");
const createJWT = require("./utils/createJWT");

const login = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } });
		if (!user)
			return res
				.status(404)
				.json({ status: "error", message: "Incorrect user or password" });

		if (user.isBanned)
			return res.json({ status: "error", message: "User is banned" });
		if (!compareSync(req.body.password, user.password)) {
			return res
				.status(401)
				.json({ status: "error", message: "Incorrect user or password" });
		}
		const token = createJWT(user.id);

		const sendUserInfo = {
			id: user.id,
			name: user.firstName,
			email: user.email,
			role: user.role,
		};

		return res.json({
			user: sendUserInfo,
			token,
		});
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};
module.exports = login;
