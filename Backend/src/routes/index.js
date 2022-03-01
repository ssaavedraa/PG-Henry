const { Router } = require("express")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const techniqueRoute = require("./techniqueRoute.js")

const router = Router()
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/technique", techniqueRoute)
module.exports = router
