const { User } = require("../../db");
const { compareSync } = require("bcrypt");
const createJWT = require("./utils/createJWT");

const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user)
      return res.json({
        status: "error",
        message: "Incorrect user or password",
      });

    if (user.isBanned)
      return res.json({
        status: "error",
        message: "Your account has been banned",
      });
    if (!compareSync(req.body.password, user.password)) {
      return res.json({
        status: "error",
        message: "Incorrect user or password",
      });
    }
    if (!user.isVerified)
      return res.json({
        status: "error",
        message: "User email is not verified",
      });
    const token = createJWT(user.id);

    const sendUserInfo = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return res.json({
      status: "ok",
      user: sendUserInfo,
      token,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};
module.exports = login;
