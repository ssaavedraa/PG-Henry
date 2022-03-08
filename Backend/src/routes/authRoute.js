const { Router } = require("express");
const router = Router();
const authControllers = require("../controllers/auth/index.js");
const passport = require("passport");

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.get(
	"/a",
	passport.authenticate("jwt", { session: false }),
	authControllers.a
);

module.exports = router;
