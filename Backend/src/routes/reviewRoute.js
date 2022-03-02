const { Router } = require("express");
const router = Router();
const review = require("../controllers/review/index");

router.post("/add", review.add);
router.get("/getById/:id", review.getById);
router.get("/getByArtist/:id", review.getByArtist);

module.exports = router;
