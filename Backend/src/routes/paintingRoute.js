const { Router } = require("express");
const router = Router();
const paintingControllers = require("../controllers/painting");

router.get("/get/:id", paintingControllers.getById);
router.get("/getall", paintingControllers.getAll);
router.get("/search", paintingControllers.search);
router.post("/create", paintingControllers.add);
router.patch("/modify/:id" /*todo: controller*/);

module.exports = router;
