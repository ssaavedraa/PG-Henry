const { User } = require("../../db");
const { compareSync } = require("bcrypt");
const createJWT = require("./utils/createJWT");

const login = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } });
		if (!user) return res.status(404).send("User not found");

		if (!compareSync(req.body.password, user.password)) {
			return res.status(401).send("Incorrect password");
		}
		const token = createJWT(req.body.email);

		return res.json({
			user,
			token,
		});
	} catch (e) {
		res.status(400).send(e);
	}
};
module.exports = login;
