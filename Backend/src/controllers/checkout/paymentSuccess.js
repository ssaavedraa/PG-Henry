const { Purchase, User, ContactInfo } = require("../../db");
const getToday = require("../purchase/Utils/getToday");
const emailSender = require("../../nodemailer/paymentSuccess/sendMail.js");

const paymentSuccess = async (req, res) => {
  const { external_reference, payment_id } = req.query;
  try {
    const purchase = await Purchase.findOne({ where: {id: external_reference},
      include: [
      {
      model: User,
      attributes: ["email", "firstName"] 
      }, {
      model: ContactInfo,
      attributes: ["email", "firstName"] 
      }]});
    purchase.state = "pending";
    purchase.payment_id = payment_id;
    /* 		let pendingDateFormat = new Date();
		pendingDateFormat = pendingDateFormat.toISOString();
		pendingDateFormat = pendingDateFormat.slice(0, -5); */
    purchase.pendingDate = getToday();
    await purchase.save();
    
    emailSender(purchase.user.email, purchase.user.firstName).catch((err) => console.log(err.message));
    if (purchase.contactInfo.email !== purchase.user.email) {
      emailSender(purchase.contactInfo.email, purchase.contactInfo.firstName).catch((err) => console.log(err.message));
    }
    res.redirect("http://localhost:3000/");
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};

module.exports = paymentSuccess;
