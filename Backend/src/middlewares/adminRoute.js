const adminRoute = (req, res, next) => {
  if (req.user.role === "admin") next();
  else res.status(401).send("Unauthorized");
};

module.exports = adminRoute;
