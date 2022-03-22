const emailSender = require("../../nodemailer/userContact/sendMail.js");

const user = async (req, res) => {
  const { mail, name } = req.body;
  emailSender(mail, name).catch((err) => res.status(400).json({ err: err.message }));
  res.json({ status: "ok" })
};

module.exports = user;