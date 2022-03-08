const { Router } = require("express");
const router = Router();
const favoriteControllers = require("../controllers/favorites/index.js");

router.post("/add", favoriteControllers.add);
router.delete("/remove", favoriteControllers.remove);
router.get("/getAll", favoriteControllers.getAll);

module.exports = router;
