const { User } = require("../../db");

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
    console.log(newPassword); //aca enviaria el mail con este password al user
    user.password = newPassword
    await user.save();
    res.json("Success");
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
module.exports = passReset;
