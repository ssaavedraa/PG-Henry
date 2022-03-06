const { Router } = require("express");
const router = Router();
const paintingControllers = require("../controllers/painting");

router.get("/get/:id", paintingControllers.getById);
router.get("/getall", paintingControllers.getAll);
router.get("/getrecommended/:paintingId", paintingControllers.getRecommended);
router.get("/search", paintingControllers.search);
router.post("/create", paintingControllers.add);
router.put("/update/:id", paintingControllers.update);

module.exports = router;
