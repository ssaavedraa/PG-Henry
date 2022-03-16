const { User } = require("../../db");
const createJWT = require("./utils/createJWT");

const register = async (req, res) => {
  const {
    user: { firstName, lastName, email, password },
    url,
  } = req.body;

  try {
    const existingUser = await User.findOne({
      where: { email: email, googleUser: false },
    });

    if (existingUser)
      return res.json({ status: "error", message: "email is already used" });

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
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

    console.log(
      "Esto es un mail a user.mail, que le manda un link a:",
      url + "/user/verify/" + token
    );

    res.json({
      status: "ok",
      user: sendUserInfo,
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = register;
