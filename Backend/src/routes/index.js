const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const paintingRoute = require("./paintingRoute.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => {
  res.send("funciona");
});

router.use("/painting", paintingRoute);
module.exports = router;
