const { Router } = require("express")
const router = Router()
const technique = require("../controllers/technique/index")

console.log(technique.remove)

router.post("/add", technique.add)
router.delete("/remove", technique.remove)
router.get("/getAll", technique.getAll)

module.exports = router
