const { Router } = require("express");
const router = Router();
const authControllers = require("../controllers/auth/index.js");
const passport = require("passport");

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.get(
	"/get",
	passport.authenticate("jwt", { session: false }),
	authControllers.get
);

module.exports = router;
