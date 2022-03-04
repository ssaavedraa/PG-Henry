const { Router } = require("express");
const router = Router();
const artistControllers = require("../controllers/artist/index.js");

router.get("/getall", artistControllers.getAll);
router.get("/get/:id", artistControllers.getById);
router.post("/create", artistControllers.add);
router.put("/update/:id", artistControllers.update);

module.exports = router;