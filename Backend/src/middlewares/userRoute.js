const userRoute = (req, res, next) => {
  if (req.user.role === "user") next();
  else res.status(401).send("Unauthorized");
};

module.exports = userRoute;
