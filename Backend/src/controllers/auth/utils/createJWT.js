const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const createJWT = (email) => {
	return jwt.sign(email, secret);
};

module.exports = createJWT;
