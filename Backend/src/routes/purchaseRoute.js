const { Router } = require("express");
const router = Router();
const purchaseControllers = require("../controllers/purchase");
const adminRoute = require("../middlewares/adminRoute");

router.get("/get/all", purchaseControllers.getAll);

router.use("/set/canceled/:id", adminRoute);
router.put("/set/canceled/:id", purchaseControllers.setCanceled);
router.use("/set/completed/:id", adminRoute);
router.put("/set/completed/:id", purchaseControllers.setCompleted);
router.use("/set/dispatched/:id", adminRoute);
router.put("/set/dispatched/:id", purchaseControllers.setDispatched);

module.exports = router;
