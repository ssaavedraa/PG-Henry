const { Router } = require("express");
const router = Router();
const technique = require("../controllers/technique/index");

router.post("/add", technique.add);
router.delete("/remove", technique.remove);
router.get("/getall", technique.getAll);

module.exports = router;
