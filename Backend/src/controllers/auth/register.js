const { User } = require("../../db");
const createJWT = require("./utils/createJWT");
const emailSender = require("../../nodemailer/register/sendMail.js");

const register = async (req, res) => {
  const {
    user: { firstName, lastName, email, password },
    url,
  } = req.body;

  try {
    const existingUser = await User.findOne({
      where: { email, googleUser: false },
    });

    if (existingUser)
      return res.json({ status: "error", message: "email is already used" });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role: "user",
    });

    const sendUserInfo = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    const token = createJWT(user.id);

    const link = `${url}/user/verify/${token}`

    emailSender(user.email, user.firstName, link).catch((err) => res.status(400).json({ err: err.message }));

    res.json({
      status: "ok",
      user: sendUserInfo,
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = register;
