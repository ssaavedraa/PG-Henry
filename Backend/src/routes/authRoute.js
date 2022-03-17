const { Router } = require("express");
const router = Router();
const authControllers = require("../controllers/auth/index.js");
const userControllers = require("../controllers/user");
const passport = require("passport");

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.post("/google/login", authControllers.googleAuth);
router.get(
  "/get",
  passport.authenticate("jwt", { session: false }),
  authControllers.get
);
router.get("/getall", userControllers.getAll);
router.put(
  "/verifyMail",
  passport.authenticate("jwt", { session: false }),
  authControllers.verifyMail
);
router.put("/ban/:id", userControllers.ban);
router.put("/unban/:id", userControllers.unban);
router.put("/giveadmin/:id", userControllers.giveAdmin);
router.put("/removeadmin/:id", userControllers.removeAdmin);
router.put("/passreset/:id", userControllers.passReset);
router.put(
  "/changeName",
  passport.authenticate("jwt", { session: false }),
  userControllers.changeName
);
router.put(
  "/changePassword",
  passport.authenticate("jwt", { session: false }),
  userControllers.changePassword
);

module.exports = router;
