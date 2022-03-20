const { Purchase } = require("../../db");
const getToday = require("./Utils/getToday");

const setDispatched = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchase.findByPk(id);
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
