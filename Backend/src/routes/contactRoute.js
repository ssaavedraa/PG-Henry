const { Router } = require("express");
const router = Router();
const contactControllers = require("../controllers/contact/index.js");

router.post("/contactUser", contactControllers.user);
router.post("/contactArtist", contactControllers.artist);
router.post("/contactMessage", contactControllers.message);

module.exports = router;