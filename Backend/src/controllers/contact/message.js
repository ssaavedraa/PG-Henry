const emailSender = require("../../nodemailer/contactMessages/sendMail.js");

const message = async (req, res) => {
  const { mail, name, message } = req.body;
  emailSender(name, mail, message).catch((err) => res.status(400).json({ err: err.message }));
  res.json({ status: "ok" })
};

module.exports = message;