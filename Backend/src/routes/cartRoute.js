const { Router } = require("express");
const router = Router();
const cartControllers = require("../controllers/cart/index.js");

router.post("/add/:id", cartControllers.add);
router.delete("/remove/:id", cartControllers.remove);
router.get("/getAll", cartControllers.getAll);

module.exports = router;
