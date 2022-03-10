const { User } = require("../../db");
const emailSender = require("../../Nodemailer/sendMail.js");
const { subject, text } = require("../../Nodemailer/Templates/resetPasswordMail.js");

const passReset = async (req, res) => {

  const { id } = req.params;

  try {

    const user = await User.findOne({
      where: { id },
    });

    if (!user) throw new Error("couldn't find user with id: " + id);
    const charArray = Array.from(new Array(16), () =>
      Math.floor(Math.random() * 25 + 97)
    );

    const newPassword = String.fromCharCode(...charArray);

    emailSender(user.email, subject, text).catch((err) => res.status(400).json({ err: err.message }));

    user.password = newPassword

    await user.save();

    res.json("Success");
  } catch (err) {
    console.log(err)
    res.status(400).json({ err: err.message });
  }
};
module.exports = passReset;
