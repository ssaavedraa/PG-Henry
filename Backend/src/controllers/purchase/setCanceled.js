const { Purchase } = require("../../db");
const getToday = require("./Utils/getToday");

const setCanceled = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchase.findByPk(id);
    if (!purchase)
      return res.json({ status: "error", message: "Purchase doesn't exist" });
    if (purchase.state === "processing") {
      return res.json({
        status: "error",
        message: "Purchase can't be cancelled when processing ",
      });
    }
    if (purchase.state === "completed") {
      return res.json({
        status: "error",
        message: "Purchase can't be cancelled when complete ",
      });
    }
    purchase.state = "canceled";
    purchase.canceledDate = getToday();
    await purchase.save();
    res.json({
      status: "ok",
      message: "Purchase canceled",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = setCanceled;
