const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const createJWT = (id) => {
	return jwt.sign(id, secret);
};

module.exports = createJWT;
