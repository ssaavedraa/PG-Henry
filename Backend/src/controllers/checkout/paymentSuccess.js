const { Purchase, User, ContactInfo } = require("../../db");
const getToday = require("../purchase/Utils/getToday");
const emailSender = require("../../nodemailer/paymentSuccess/sendMail.js");

const paymentSuccess = async (req, res) => {
  const { external_reference, payment_id } = req.query;
  try {
    const { purchaseId, url } = JSON.parse(external_reference);
    const purchase = await Purchase.findOne({
      where: { id: purchaseId },
      include: [
        {
          model: User,
          attributes: ["email", "firstName"],
        },
        {
          model: ContactInfo,
          attributes: ["email", "firstName"],
        },
      ],
    });
    purchase.state = "pending";
    purchase.payment_id = payment_id;
    /* 		let pendingDateFormat = new Date();
		pendingDateFormat = pendingDateFormat.toISOString();
		pendingDateFormat = pendingDateFormat.slice(0, -5); */
    purchase.pendingDate = getToday();
    await purchase.save();
    await emailSender(
      purchase.contactInfo.email,
      purchase.contactInfo.firstName
    );
    res.redirect(`http://${url}/`);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};

module.exports = paymentSuccess;
