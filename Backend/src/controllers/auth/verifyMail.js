const { User } = require("../../db");

const verifyMail = async (req, res) => {
  const { id, firstName, lastName, email, role } = req.user;
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error("couldn't find user with id: " + id);
    user.isVerified = true;
    await user.save();
    const sendUserInfo = {
      id,
      firstName,
      lastName,
      email,
      role,
    };
    return res.json(sendUserInfo);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
module.exports = verifyMail;
