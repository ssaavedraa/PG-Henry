const { Router } = require("express");
const router = Router();
const technique = require("../controllers/technique/index");

router.post("/add", technique.add);
router.delete("/remove/:id", technique.remove);
router.get("/getAll", technique.getAll);

module.exports = router;