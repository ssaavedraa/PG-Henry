const { Router } = require("express");
const router = Router();
const paintingControllers = require("../controllers/painting");

router.get("/get/:id", paintingControllers.getById);
router.get("/getStats", paintingControllers.getStats);
router.get("/getall", paintingControllers.getAll);
router.get("/getrecommended/:paintingId", paintingControllers.getRecommended);
router.get("/search", paintingControllers.search);
router.get("/search/suggestions/:searchBy", paintingControllers.getSuggestions);
router.post("/create", paintingControllers.add);
router.put("/update/:id", paintingControllers.update);
router.put("/setAvailable/:id", paintingControllers.setAvailable);
router.put("/setNotAvailable/:id", paintingControllers.setNotAvailable);

module.exports = router;
