const { Purchase } = require("../../db");
const getToday = require("./Utils/getToday");

const setCompleted = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchase.findByPk(id);
    if (!purchase)
      return res.json({ status: "error", message: "Purchase doesn't exist" });
    if (purchase.state !== "dispatched") {
      return res.json({
        status: "error",
        message: "Purchase can't be completed when it's not dispatched",
      });
    }
    purchase.state = "completed";
    purchase.completedDate = getToday();
    await purchase.save();
    res.json({
      status: "ok",
      message: "Purchase completed",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = setCompleted;
