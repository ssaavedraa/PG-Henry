const { User } = require("../../db");

const removeAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) throw new Error("couldn't find user with id: " + id);
    user.role = "user";
    await user.save();
    res.json("Success");
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
module.exports = removeAdmin;
