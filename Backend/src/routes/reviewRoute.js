const { Router } = require("express");
const router = Router();
const review = require("../controllers/review/index");

router.post("/add", review.add);
router.post("/edit/:id", review.update);
router.get("/getById/:id", review.getById);
router.get("/getByArtist/:id", review.getByArtist);
router.delete("/remove/:id", review.remove);

module.exports = router;
