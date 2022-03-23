const { Purchase } = require("../../db");
const getToday = require("./Utils/getToday");
const emailSender = require("../../nodemailer/paymentDispatched/sendMail.js");

const setDispatched = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchase.findOne({ where: {id},
      include: [
      {
      model: User,
      attributes: ["email", "firstName"] 
      }, {
      model: ContactInfo,
      attributes: ["email", "firstName"] 
      }]});
    if (!purchase)
      return res.json({ status: "error", message: "Purchase doesn't exist" });
    if (purchase.state !== "pending") {
      return res.json({
        status: "error",
        message: "Purchase can't be dispatched when it's not pending",
      });
    }
    purchase.state = "dispatched";
    purchase.dispatchedDate = getToday();
    await purchase.save();

    emailSender(purchase.user.email, purchase.user.firstName).catch((err) => console.log(err.message));
    if (purchase.contactInfo.email !== purchase.user.email) {
      emailSender(purchase.contactInfo.email, purchase.contactInfo.firstName).catch((err) => console.log(err.message));
    }
     
    res.json({
      status: "ok",
      message: "Purchase dispatched",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = setDispatched;
