const { Router } = require("express");
const router = Router();

router.get("/get/:id", painting.getById /*todo:controller*/);
router.get("/getall" /*todo:controller*/);
router.get("/search" /*todo:controller*/);
router.post("/create" /*todo: controller*/);
router.patch("/modify/:id" /*todo: controller*/);

module.exports = router;
