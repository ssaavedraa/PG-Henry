const { User } = require("../../db");
const emailSender = require("../../nodemailer/userUnban/sendMail.js");

const unban = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) throw new Error("couldn't find user with id: " + id);
    user.isBanned = false;
    await user.save();
    
    emailSender(user.email, user.firstName).catch((err) => res.status(400).json({ err: err.message }));
    
    res.json("Success");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
module.exports = unban;
