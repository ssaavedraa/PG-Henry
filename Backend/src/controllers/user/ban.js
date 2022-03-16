const { User } = require("../../db");
const emailSender = require("../../nodemailer/userBan/sendMail.js");

const ban = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) throw new Error("couldn't find user with id: " + id);
    user.isBanned = true;
    await user.save();

    emailSender(user.email, user.firstName).catch((err) => res.status(400).json({ err: err.message }));

    res.json("Success");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
module.exports = ban;
