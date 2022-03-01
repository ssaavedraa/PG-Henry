const { Router } = require("express")
const router = Router()
const technique = require("../controllers/technique/index")

console.log(technique)

router.post("/add", technique.add)

module.exports = router
